import * as React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { HashRouter } from 'react-router-dom';
import { SimpleGauge } from 'react-simple-gauges';

import { Header, StatusCard } from '../components';


export const Main = () => {
  return (
    <HashRouter>
      <Header />
      <h3 className="font-weight-bold m-3">September 01, 2020 <span className="h6 text-muted">TUESDAY</span></h3>
      <Container fluid className="my-5" >
        <Row md={4}>
           <Col>
            <SimpleGauge percent="88" width="250px" color="blue" />
          </Col>
          <Col>
          <SimpleGauge width="250px" percent="63" color="green" />
          </Col>
          <Col>
          <SimpleGauge percent="50" width="250px" color="red" />
          </Col>
          <Col>
          <SimpleGauge percent="37" width="250px" color="purple" />
          </Col>
        </Row>
      </Container>

      <Container fluid className="bg-light">
        <Row>
          <Col sm={6}><StatusCard /></Col>
          <Col sm={6}><StatusCard /></Col>
        </Row>
      </Container>
      
    </HashRouter>
  );
};
