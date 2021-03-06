import React from "react";
import { Modal, Icon, Header, Button } from "semantic-ui-react";
import Moment from "react-moment";
import moment from "moment";

const Event = ({ open, onClose, event }) => {
  let time = parseInt(event && event.date.$date.$numberLong);
  let today = moment(time).isSame(new Date(), "day");
  let tomorrow = moment(time).isSame(moment().add(1, "days"), "day");

  return (
    <Modal
      size="small"
      open={open}
      onClose={onClose}
      closeIcon
      dimmer="blurring"
    >
      <style>
        {`
      .important {
        color: red;
      }
    }
    `}
      </style>
      <Modal.Header>
        <Icon name={event && event.icon} />
        {event && event.name}
      </Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>
            <p>
              This event is happening&nbsp;
              {!today ? (
                <Moment format="dddd" className="important">
                  {parseInt(event && event.date.$date.$numberLong)}
                </Moment>
              ) : (
                <span className="important">today</span>
              )}
              {event && !event.day ? (
                <React.Fragment>
                  <span> at&nbsp;</span>
                  <Moment format="h:mm A" className="important">
                    {parseInt(event && event.date.$date.$numberLong)}
                  </Moment>
                </React.Fragment>
              ) : null}
              {event && event.day && today ? (
                <span>!</span>
              ) : tomorrow ? (
                <React.Fragment>
                  <span>&nbsp;which is&nbsp;</span>
                  <span className="important">tomorrow</span>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  &nbsp;which is&nbsp;
                  <Moment fromNow Now className="important">
                    {parseInt(event && event.date.$date.$numberLong)}
                  </Moment>
                </React.Fragment>
              )}
            </p>
          </Header>
          <p>
            {event && event.day ? (
              <Moment format="Do of MMMM, YYYY">
                {parseInt(event && event.date.$date.$numberLong)}
              </Moment>
            ) : (
              <Moment format="h:mm A on Do of MMMM, YYYY">
                {parseInt(event && event.date.$date.$numberLong)}
              </Moment>
            )}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button content="Close" onClick={() => onClose()} positive />
      </Modal.Actions>
    </Modal>
  );
};

export default Event;
