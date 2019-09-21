import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import {
  Container,
  Row,
  Col,
  Button } from 'react-bootstrap';

const STYLES = styled.div`
  height: 100VH;
  width: 100%;

  h1 {
    margin-top: 3em;
  }
`;

  const Success = () => {
    return (
      <STYLES>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 className="text-center">Success!</h1>
              <p>Thank you for your order</p>
            </Col>
          </Row>
        </Container>
      </STYLES>
    );
  }


  export default Success;
