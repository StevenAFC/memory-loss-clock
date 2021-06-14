import Moment from "react-moment";
import Day from "./Day";
import Time from "./Time";
import SoftTime from "./SoftTime";
import Date from "./Date";
import { Container, Header, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

Moment.startPooledTimer("interval={100}");

function App() {
  return (
    <Container fluid textAlign="center">
      <style>
        {`
      html, body {
        background-color: #252839 !important;
      }
      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
      </style>

      <Header inverted size="huge">
        <Day /> -
        <SoftTime />
      </Header>

      <Header as="h1" inverted size="huge">
        <Header.Content>
          <Icon name="clock outline" />
          <Time />
        </Header.Content>
      </Header>

      <Header as="h1" inverted size="huge">
        <Header.Content>
          <Icon name="calendar alternate outline" />
          <Date />
        </Header.Content>
      </Header>
    </Container>
  );
}

export default App;
