import Moment from "react-moment";
import Day from "./Day";
import Time from "./Time";
import SoftTime from "./SoftTime";
import Events from "./Events";
import Date from "./Date";
import { Container, Header, Icon, Grid } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

Moment.startPooledTimer("interval={100}");

function App() {
  return (
    <Container>
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
      .bigger {
        font-size: 3em !important;
      }
      .even-bigger {
        font-size: 3.5em !important;
      }
    }
    `}
      </style>
      <Grid
        verticalAlign="middle"
        style={{ height: "100vh" }}
        columns={2}
        padded
        divided
      >
        <Grid.Row>
          <Grid.Column textAlign="center" width={10}>
            <Header inverted className="bigger">
              <Day /> -
              <SoftTime />
            </Header>

            <Header as="h1" inverted className="even-bigger">
              <Header.Content>
                <Icon name="clock outline" />
                <Time />
              </Header.Content>
            </Header>

            <Header as="h1" inverted className="bigger">
              <Header.Content>
                <Icon name="calendar alternate outline" />
                <Date />
              </Header.Content>
            </Header>
          </Grid.Column>

          <Grid.Column width={6}>
            <Events />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default App;
