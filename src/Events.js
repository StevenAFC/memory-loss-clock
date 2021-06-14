import React, { useState, useEffect } from "react";
import EventDataServce from "./services/events-service";
import { Segment, List } from "semantic-ui-react";
import moment from "moment";

const Events = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    retrieveEvents();
  }, []);

  const retrieveEvents = () => {
    EventDataServce.getAll()
      .then((res) => {
        setEvents(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Segment inverted compact>
      <List divided inverted size="large">
        {events.map((e) => {
          return (
            <List.Item key={e._id.$oid}>
              <List.Icon name={e.icon} verticalAlign="middle" />
              <List.Content>
                <List.Header>{e.name}</List.Header>
                <List.Description>
                  Due {moment(parseInt(e.date.$date.$numberLong)).fromNow()}
                </List.Description>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </Segment>
  );
};

export default Events;
