import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import Icon from "@material-ui/core/Icon";

import Web3 from "web3";
import { Blockie } from "rimble-ui";
import { Tooltip } from "rimble-ui";
import { abi } from './RainbowToken.json';

// core components
import headerStyle from "assets/jss/material-kit-react/components/headerStyle.jsx";
export const web3 = new Web3(Web3.givenProvider || "wss://ropsten.eth.6120.eu/ws");

class BlockieHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "test",
      balance: "",
      mobileOpen: false
    };
    this.getAccount().then(e => {
      console.log(e);
      this.setState({ account: e });
     console.log(this.newContract(e))

      this.getBalance(e).then(e => {

        this.setState({ balance: web3.utils.fromWei(e, "ether") });

        console.log(e);
      });
    });
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
  }
  handleDrawerToggle() {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  }
  componentWillMount() {
   
  }

  getAccount() {
    return web3.eth.getAccounts(function(err, accounts) {
      return accounts;
    });
  }

  getBalance(address) {
    var balance = web3.eth.getBalance(address[0]);
    return balance.then(e => {
      return e;
    });
  }

  newContract(address) {
    var balance = new web3.eth.Contract(abi, address[0]);
    return balance
  }

  componentWillUnmount() {
 
  }
  render() {
    console.log(this.state.account[0]);

    return (
      <div>
        <Tooltip variant="dark" message={this.state.account[0]} placement="top">
          <Blockie
            opts={{
              seed: this.state.account,
              color: "#dfe",
              size: 15,
              scale: 3,
              spotcolor: "#000"
            }}
          />
        </Tooltip>
        <Tooltip variant="dark" message={"Balance " + this.state.balance} placement="top">
          <Icon size={20} style={{ marginLeft: 20 }}>
            trending_up
          </Icon>
          {this.state.balance}
        </Tooltip>
      </div>
    );
  }
}

export default withStyles(headerStyle)(BlockieHeader);
