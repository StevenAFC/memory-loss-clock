import React, { useState, useEffect } from "react";
import EventDataServce from "./services/events-service";
import { Segment, List } from "semantic-ui-react";
import moment from "moment";
import Moment from "react-moment";
import Event from "./Event";

const Events = (props) => {
  const [events, setEvents] = useState([]);
  const [lastChecked, setLastChecked] = useState(moment().format());

  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    setInterval(() => {
      setLastChecked(moment().format());
    }, 2000000);
  }, []);

  useEffect(() => {
    EventDataServce.getAll()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [lastChecked]);

  return (
    <Segment inverted compact>
      <style>
        {`
      .today {
        background-color:rgba(255, 255, 0, 0.3) !important;
        border-radius: 3px !important;
        }
      }
    `}
      </style>
      <List selection celled inverted size="large">
        {events.map((e) => {
          let today = moment(parseInt(e.date.$date.$numberLong)).isSame(
            new Date(),
            "day"
          );

          let tomorrow = moment(parseInt(e.date.$date.$numberLong)).isSame(
            moment().add(1, "days"),
            "day"
          );

          return (
            <List.Item
              key={e._id.$oid}
              className={today ? "today" : null}
              onClick={() => {
                setSelectedEvent(e);
                setEventModalOpen(true);
              }}
            >
              <List.Icon name={e.icon} verticalAlign="middle" />
              <List.Content>
                <List.Header>{e.name}</List.Header>
                <List.Description>
                  {today && e.day ? (
                    "Today!"
                  ) : (
                    <span>
                      Due&nbsp;
                      {tomorrow ? (
                        <span>tomorrow</span>
                      ) : (
                        <Moment fromNow>
                          {parseInt(e.date.$date.$numberLong)}
                        </Moment>
                      )}
                    </span>
                  )}
                </List.Description>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
      <br />
      <span style={{ color: "#424242" }}>
        Last Updated:&nbsp;
        <Moment fromNow>{lastChecked}</Moment>
      </span>
      <Event
        open={eventModalOpen}
        onClose={() => setEventModalOpen(false)}
        event={selectedEvent}
      />
    </Segment>
  );
};

export default Events;
