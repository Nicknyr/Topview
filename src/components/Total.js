import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import { Col, Row, Container, Button } from 'react-bootstrap';
import {accounting} from 'accounting';

const STYLES = styled.div`

  .total-container {
    margin-top: 1em;
    margin-bottom: 1em;

    span {
      font-size: 2em;
    }
  }
`;


const Total = (props) => {
  return (
    <STYLES>
        <Row>
          <Col xs={{span: 6, offset: 3}} md={{span: 4, offset: 4}} className="total-container">
            <span>Total : </span>
            <span>{accounting.formatMoney(props.totalCost)}</span>
          </Col>
        </Row>
    </STYLES>
  );
}

export default Total;
