import React from "react";
import { Modal, Icon, Header, Button } from "semantic-ui-react";
import Moment from "react-moment";
import moment from "moment";

const Event = ({ open, onClose, event }) => {
  let time = parseInt(event && event.date.$date.$numberLong);
  let today = moment(time).isSame(new Date(), "day");

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
              This event will be&nbsp;
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
              &nbsp;which is&nbsp;
              <Moment fromNow className="important">
                {parseInt(event && event.date.$date.$numberLong)}
              </Moment>
            </p>
            <p>
              <Moment format="Do of MMMM, YYYY">
                {parseInt(event && event.date.$date.$numberLong)}
              </Moment>
            </p>
          </Header>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          content="Close"
          labelPosition="right"
          icon="checkmark"
          onClick={() => onClose()}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default Event;
