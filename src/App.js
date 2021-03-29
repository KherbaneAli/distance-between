import Header from "./components/Header";
import { Grid, Row, Col } from "react-flexbox-grid";

const App = () => {
  return (
    <>
      <Header />
      <Grid fluid>
        <Row>
          <Col xs={12} md={4}>
            From
            <input type="text"></input>
          </Col>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}>
            To
            <input type="text"></input>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default App;
