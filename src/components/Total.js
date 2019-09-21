import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import { Col, Row, Container, Button } from 'react-bootstrap';
import {accounting} from 'accounting';

const STYLES = styled.div`

`;

const Total = (props) => {
  return (
    <STYLES>
        <Row>
          <Col xs={{span: 6, offset: 3}} md={{span: 4, offset: 4}}>
            <p>Total : </p>
            {accounting.formatMoney(props.totalCost)}
          </Col>
        </Row>
    </STYLES>
  );
}

export default Total;
