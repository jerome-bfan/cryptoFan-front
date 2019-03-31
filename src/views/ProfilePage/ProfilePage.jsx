import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Games from "@material-ui/icons/Games";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import tokenLogo from "assets/img/token_logo.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import arbitre from "assets/img/examples/arbitre.jpg";
import mvp from "assets/img/examples/mvp.jpg";
import checkin from "assets/img/examples/checkin.jpg";
import adidas from "assets/img/examples/adidas.jpg";
import licence from "assets/img/examples/licence.jpg";
import training from "assets/img/examples/training.jpg";
import reward from "assets/img/examples/reward.jpg";
import voir_match from "assets/img/examples/voir_match.jpg";
import ucpa from "assets/img/examples/ucpa.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import Web3 from "web3";
import { abi } from "components/Header/RainbowToken.json";

export const web3 = new Web3(window.web3.currentProvider);
const qte = 41;
const bank_address = "0xd3E3d958bABCf2Eb378Af2ED5DE42359ac2F09E3";
const user_address = "0x6eA5caCB70E86F2f07ff5171C7D539Ccb982aB36";
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      tokenUser: ""
    };
    this.getAccount().then(e => {
      console.log(e);
      this.setState({ account: e });
      console.log(this.newContract(e));
      this.newContract("dd").then(e => {
        console.log(e);
        this.setState({ tokenUser: e });
      });
      this.transferForm("dd");

      console.log("easy");
    });
  }
  async newContract(address) {
    var contract = new web3.eth.Contract(
      abi,
      "0x36dF643699515a19e43f8ccF857B14B05411A88a"
    );
    return contract.methods
      .balanceOf(bank_address)
      .call(
        { from: "0x92325673E1d4B0997F489fF11770d86D151D2d07" },
        (error, result) => {
          console.log(result);
        }
      )
      .then(receipt => {
        console.log(receipt);
        console.log("testss");
        return receipt;
      });
  }
   transferForm(address) {
    var contract = new web3.eth.Contract(
      abi,
      "0x36dF643699515a19e43f8ccF857B14B05411A88a"
    );
    contract.methods.transferFrom(bank_address, user_address, 41).call();
  }

  getAccount() {
    return web3.eth.getAccounts(function(err, accounts) {
      return accounts;
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const tokenClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks />}
          fixed
          {...rest}
        />

        <Parallax small filter image={require("assets/img/header_sf2.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <div id="tokens" className={tokenClasses}>
                        <h2 className={classes.tokenValue}>
                          {this.state.tokenUser}
                        </h2>
                        <img src={tokenLogo} className={classes.tokenLogo} />
                      </div>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <h5>
                  Engagez vous auprès de la FFF et de ses clubs pour bénéficier
                  de récompenses et d'experiences uniques
                </h5>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Actions",
                        tabIcon: Games,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={checkin}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={licence}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={voir_match}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={mvp}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={arbitre}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Récompenses",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={12}>
                              <img
                                alt="..."
                                src={ucpa}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={training}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={adidas}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
