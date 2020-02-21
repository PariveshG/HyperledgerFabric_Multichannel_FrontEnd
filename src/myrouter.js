import React from 'react';
import ReactDOM from 'react-dom';
import Kycreate from "./kycreate";
import metadatakyc from "./metadatakyc";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './myrouter.css';
import CreateKYC from "./createkyc";
import CreateTrade from "./createTrade";
import CreateTwoTrade from "./createtwotrade";
import Demo from './demo';
import TwoParties from './twoparties';
class myrouter extends React.Component{
 

     render(){
         return (
          <Router id="one">
   
    <ul>
        <li><Link id="link" to='/createtwotrade'>Trade</Link></li>
		<li><Link id="link" to='/createTrade'>TradeForAll</Link></li>
        <li><Link id="link1" to='/dashboardall'>DashBoardAll</Link></li>
		<li><Link id="link1" to='/twoparties'>DashBoard</Link></li>
       
        
    </ul>
	<Route  path='/createtwotrade' component={CreateTwoTrade}></Route>
    <Route  path='/createTrade' component={CreateTrade}></Route>
    <Route  path='/dashboardall' component={Demo}></Route>
	<Route  path='/twoparties' component={TwoParties}></Route>
 
</Router>
         )
     }
}
// <li><Link id="link" to='/kycreate'>Create KYC</Link></li>
 //  <Route  path='/kycreate' component={CreateKYC}></Route>
export default myrouter;