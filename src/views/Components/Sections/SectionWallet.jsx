/*eslint-disable*/
import React from "react";
import { PublicAddress } from "rimble-ui";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";
import Icon from "@material-ui/core/Icon";
import Web3 from "web3";

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";

import { Modal, Row, Col } from "react-bootstrap";
const web3 = new Web3(Web3.givenProvider || "wss://ropsten.eth.6120.eu/ws");

class SectionWallet extends React.Component {
  render() {
    web3.eth.getAccounts(accounts => console.log(accounts));
    try {
      web3.eth.getAccounts(function(err, accounts) {
        
        console.log(err);
        console.log(accounts);
      });
    } catch (err) {
      console.log(err);
    }
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <Card xs={12} sm={12} md={6}>
            <Col>
              <CardHeader color="primary">
                <Row>
                  Mon Portefeuille{" "}
                  <Icon style={{ right: 30, position: "absolute" }}>
                    credit_card_multiple
                  </Icon>
                </Row>
              </CardHeader>
            </Col>
            <CardBody>
              <h4 className={classes.cardTitle}>Portefeuille</h4>
              <p>Mon argent</p>
              <Row style={{ justifyContent: "flex-end", display: "flex" }}>
                <Button color="primary" style={{}}>
                  Do something
                </Button>
              </Row>
              <PublicAddress address="0x99cb784f0429efd72wu39fn4256n8wud4e01c7d2" />
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionWallet);
