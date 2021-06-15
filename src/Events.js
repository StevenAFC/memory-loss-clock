import React, { useState, useEffect } from "react";
import EventDataServce from "./services/events-service";
import { Segment, List } from "semantic-ui-react";
import moment from "moment";
import Moment from "react-moment";

const Events = (props) => {
  const [events, setEvents] = useState([]);
  const [lastChecked, setLastChecked] = useState(moment().format());

  useEffect(() => {
    setInterval(() => {
      console.log("mook");
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
        color: yellow !important;
        }
      }
    `}
      </style>
      <List celled inverted size="large">
        {events.map((e) => {
          let today = moment(parseInt(e.date.$date.$numberLong)).isSame(
            new Date(),
            "day"
          );

          return (
            <List.Item key={e._id.$oid} className={today ? "today" : null}>
              <List.Icon name={e.icon} verticalAlign="middle" />
              <List.Content>
                <List.Header>{e.name}</List.Header>
                <List.Description>
                  {today ? (
                    "Due today!"
                  ) : (
                    <span>
                      Due&nbsp;
                      <Moment fromNow>
                        {parseInt(e.date.$date.$numberLong)}
                      </Moment>
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
    </Segment>
  );
};

export default Events;
