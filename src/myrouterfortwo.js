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
import SearchTradeBar from './SearchTradeBar' ;
class myrouterfortwo extends React.Component{
 
 constructor(props) 
    { 
        super(props); 
  
        
  
           } 

     render(){
         return (
          <Router id="one">
   
    <ul>
        <li><Link id="link" to='/createtwotrade'>Trade</Link></li>
		      
		<li><Link id="link1" to='/twoparties'>DashBoard</Link></li>
        <li><Link id="link1" to='/searchTrade'>Search Trade</Link></li>
        
    </ul>
	<Route  path='/createtwotrade' component={() => <CreateTwoTrade name={this.props.name} party={this.props.party}/>}></Route>
	<Route  path='/twoparties' component={() => <TwoParties name={this.props.name} party={this.props.party}/>}></Route>
	<Route  path='/searchTrade' component={() => <SearchTradeBar name={this.props.name} party={this.props.party}/>}></Route>
	
</Router>


         )
     }
}
// <li><Link id="link" to='/kycreate'>Create KYC</Link></li>
 //  <Route  path='/kycreate' component={CreateKYC}></Route>
export default myrouterfortwo;