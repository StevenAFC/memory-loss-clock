import React, { useState, useEffect } from "react";
import EventDataServce from "./services/events-service";
import { Segment, List } from "semantic-ui-react";
import moment from "moment";

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
      <br />
      Last Updated: {moment(lastChecked).fromNow()}
    </Segment>
  );
};

export default Events;
