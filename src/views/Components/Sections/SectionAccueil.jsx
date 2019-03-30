/*eslint-disable*/
import React from "react";

import CardHeader from "components/Card/CardHeader.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// core components
import downloadStyle from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-react.jsx";
class SectionAccueil extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer className={classes.textCenter} justify="center">
            <Card xs={12} sm={12} md={6}>
              <CardHeader color="warning">Featured</CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Special title treatment</h4>
                <p>
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Button color="primary">Do something</Button>
              </CardBody>
            </Card>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(downloadStyle)(SectionAccueil);
