import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";

import Web3 from "web3";
import { abi } from './web3/CryptoFan.json';

var hist = createBrowserHistory();

const contractAddress = "0x92325673E1d4B0997F489fF11770d86D151D2d07";
const web3ws = new Web3(window.web3.currentProvider);
export const CryptoFanWs = new web3ws.eth.Contract(abi, contractAddress).events;
const CryptoFanTest = new web3ws.eth.Contract(abi, contractAddress);

// console.log(CryptoFanTest.options)
// CryptoFanTest.options.jsonInterface = abi
// CryptoFanTest.options.defaultAccount= '0x3cb471fe894fFBbAB491624A3fD7C3D854C716c1'
// CryptoFanTest.options.defaultGasPrice = '20000000000000'; // default gas price in wei
// CryptoFanTest.options.defaultGas = 5000000; // provide as fallback always 5M gasconsole.log(CryptoFanTest.options)
// CryptoFanTest.methods.createTokens('0x3cb471fe894fFBbAB491624A3fD7C3D854C716c1', 100).send({from : '0x3cb471fe894fFBbAB491624A3fD7C3D854C716c1'}).then((receipt) => {
    // receipt can also be a new contract instance, when coming from a "contract.deploy({...}).send()"
// 	console.log(receipt)
// });

CryptoFanTest.methods.balanceOf('0x3cb471fe894fFBbAB491624A3fD7C3D854C716c1').call({from : '0x3cb471fe894fFBbAB491624A3fD7C3D854C716c1'},(error, result) => {console.log(result)}).then((receipt) => {
    console.log(web3ws.utils.hexToNumber(receipt))
});


// Coursetro.getInstructor(function(error, result){
//     if(!error)
//         {
//             $("#instructor").html(result[0]+' ('+result[1]+' years old)');
//             console.log(result);
//         }
//     else
//         console.error(error);
// });
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={ProfilePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
