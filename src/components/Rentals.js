import React, {Component} from 'react';
import styled, { css } from 'styled-components';
import axios from 'axios';
import logo from '../assets/logo.svg';
import {
  Container,
  Row,
  Col,
  Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Total from './Total';
import Cards from './Cards';
import CheckoutModal from './Modal';


// styled-components
const STYLES = styled.div`
  height: 100%;
  width: 100%;

  .card-container {
    display: flex;
    flexDirection: row;
    flex-wrap: wrap;
    margin-top: 5em;
    margin-bottom: 5em;
  }

  .card {
    //background: rgb(35,45,105);
    //background: linear-gradient(90deg, rgba(35,45,105,1) 0%, rgba(233,21,22,1) 100%);
    flex: 1;
    justify-content: space-around;
    margin: 1em;
    border-radius: 10px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                0 1px 5px 0 rgba(0, 0, 0, 0.12),
                0 3px 1px -2px rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                  0 1px 18px 0 rgba(0, 0, 0, 0.12),
                  0 3px 5px -1px rgba(0, 0, 0, 0.3);
    }
  }

  img {
    margin-top: 3em;
  }

  h2 {
    color: #232d69;
    margin-top: 1em;
  }
`;

const BUTTON = styled(Button)`
  display: block;
  margin: 1em;
  background: #e91516 !important;
  border: 1px solid #e91516 !important;
  width: 10em;
  margin-left: auto;
  margin-right: auto;
`;


class Rentals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      totalCost: '',
      items: [],
      show: false,
      orderSuccess: true,
      orderFail: false,
      containsBike: false
    };
  }

  // Axios call retrieving JSON data from public folder
  componentDidMount = () => {
    axios.get('./bikerentals.json')
      .then((res) => {
        console.log(res);
        this.setState({
          data: res.data.products
        });
      })
      .catch((err) => {
        console.log('Error retrieving data: ' + err);
      });
  }

  // Handles button click, updates totalCost when user buys item
  handleClick = (e) => {
    console.log('e.target.id: ' + e.target.id );
    // Check if order contains a bike
    if(e.target.id < 4) {
      this.setState({
        containsBike: true
      });
    }
    this.setState({
        // Call Number on the values so they can be added together
        totalCost:  Number(this.state.totalCost) + Number(e.target.value),
        // Adds purchased items to array
        items: [...this.state.items, e.target.name]
    });
  };

  // Displays order Modal
  handleShow = () => {
    this.setState({
      show: !this.state.show
    });
  }

  // Closes order Modal
  handleClose = () => {
    this.setState({
      show: false
    });
  }

  render() {
  // Accesses JSON data
  const data = this.state.data;
  // Creates Cards for each product
  const myData = data.map((item, key) => {
    return (
      <Col xs={12} md={4}>
        <Card key={key}>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Price : ${item.price}
          </Card.Subtitle>
          <Card.Img src={item.image} alt="Product Image"></Card.Img>
          <BUTTON
            onClick={this.handleClick}
            value={item.price}
            product={item.product_type}
            id={item.id}
            name={item.name}>
              BUY NOW
          </BUTTON>
        </Card.Body>
        </Card>
      </Col>
    );
  });

    return(
      <STYLES>
      <Container>
        <Row>
          <Col xs={12}>
            <img src={logo} alt="Topview Logo"/>
            <h2 className="text-center">Bikes for rent</h2>
          </Col>
          <Col xs={12}>
            <Total totalCost={this.state.totalCost} checkout={this.checkout}/>
            <CheckoutModal
              handleShow={this.handleShow}
              handleClose={this.handleClose}
              show={this.state.show}
              totalCost={this.state.totalCost}
              items={this.state.items}
              containsBike={this.state.containsBike}
            />
          </Col>
        </Row>
        <Row>
          <Col className="card-container">
            {myData}
          </Col>
        </Row>
      </Container>
      </STYLES>
    );
  }
}

export default Rentals;
