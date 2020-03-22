import React from 'react';
import ReactDOM from 'react-dom';
import Kycreate from "./kycreate";
import metadatakyc from "./metadatakyc";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './myrouter.css';
import CreateKYC from "./createkyc";
import CreateTrade from "./createTrade";
import CreateThreeTrade from "./createthreetrade";
import Demo from './demo';
import ThreeParties from './threeparties';
import SearchThreeTradeBar from './SearchThreeTradeBar' ;
class myrouterforthree extends React.Component{
 
 constructor(props) 
    { 
        super(props); 
  
        
  
           } 

     render(){
         return (
          <Router id="one">
   
    <ul>
        <li><Link id="link" to='/createthreeTrade'>Trade</Link></li>
		      
		<li><Link id="link1" to='/threeparties'>DashBoard</Link></li>
        <li><Link id="link1" to='/searchthreeTrade'>Search Trade</Link></li>
        
    </ul>
	<Route  path='/createthreeTrade' component={() => <CreateThreeTrade name={this.props.name} party={this.props.party}/>}></Route>
	<Route  path='/threeparties' component={() => <ThreeParties name={this.props.name} party={this.props.party}/>}></Route>
	<Route  path='/searchthreeTrade' component={() => <SearchThreeTradeBar name={this.props.name} party={this.props.party}/>}></Route>
	
</Router>


         )
     }
}
// <li><Link id="link" to='/kycreate'>Create KYC</Link></li>
 //  <Route  path='/kycreate' component={CreateKYC}></Route>
export default myrouterforthree;