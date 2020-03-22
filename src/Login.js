import React, { Component } from 'react';
import { render } from 'react-dom';
import MyRouter from "./myrouter";
import Demo from './demo';
import MyRouterforTwo from "./myrouterfortwo";
import MyRouterforThree from "./myrouterforthree";

class Login extends React.Component {
	state = { users: [] };
    constructor(props) {
        super(props)
        this.state = { 
            
           username:"",
		   party:"",
		   login: "false",
		   channel:"",
         }
       this.datChange = this.datChange.bind(this);
	   this.changeHandle = this.changeHandle.bind(this);
	       }
      datChange  (ev)  {
 this.setState({
    [ ev.target.name ] : ev.target.value ,
	//party : ev.target.value
 })


      }
	  
	  changeHandle(ev){
		  this.setState({login : 'true'})
		  
	  }
	renderSwitch(param) {
		 
  switch(param) {
	 
    case 'Jim':
      return  <Demo />
    default:
      return 'foo';
  }
}  
    
    
 render() {
	 if(this.state.login=='false') {
    return (
       <div className="container">
	   <h1>{this.props.msg}</h1>
     <br></br>
        <h4>Login Form</h4>
		<br></br>
        <div className="row">
          <div className="col-sm-3">
            <form onSubmit={(event)=> this.props.handler(event ,this.state.username, this.state.party)}>
			
            <div className="form-group" id="one">
                <label for="UserName">UserName</label>
                <input type="text" name="username" value={this.state.username} onChange={this.datChange} className="form-control" />
               </div>
			  			           
              <div className="form-group" id="two">
              <label for="TradingParty">TradingParty</label>
			  
			  <select class="custom-select custom-select-sm"  name = "party" value={this.state.party} onChange={this.datChange} >
			 <option name="Select"  className="form-control">Select an organization</option>
               <option value='Org1'   className="form-control">Org1</option>
				<option value="Org2"  className="form-control">Org2</option>
				<option value="Org3"  className="form-control">Org3</option>
				</select>
			
				</div>
				<div className="form-group" id="three">
              <label for="Channel">Channel</label>
			  
			  <select class="custom-select custom-select-sm"  name = "channel" value={this.state.channel} onChange={this.datChange} >
			 <option name="Select"  className="form-control">Select Channel</option>
               <option value='channel12'   className="form-control">TwoOrgChannel</option>
				<option value="channelall"  className="form-control">ThreeOrgChannel</option>
				
				</select>
			
				</div>
				
				<div>
				&nbsp;
				&nbsp;
				</div>
				
              <div className="form-group">
                <button  className="btn btn-dark" id="btnfirst" onClick= {this.changeHandle}>&nbsp;Login</button>
               
              </div>
            </form>
          </div>
          
        </div>
		
			
      </div>
	 
    );
 }  else if (this.state.username == 'Jim' && this.state.party == 'Org1' && this.state.channel == 'channel12') {
	 
	 return (
	 <div>
	 <MyRouterforTwo name = {this.state.username} party = {this.state.party}/>
	</div>
	)
 }else if (this.state.username == 'Barry' && this.state.party == 'Org2' && this.state.channel == 'channel12') {
	 
	 return (
	 <div>
	 <MyRouterforTwo name = {this.state.username} party = {this.state.party}/>
	</div>
	)
 } else if ((this.state.username == 'Parivesh' && this.state.party == 'Org3') || (this.state.username == 'Jim' && this.state.party == 'Org1') || (this.state.username == 'Barry'  && this.state.party == 'Org2') && this.state.channel == 'channelall') {
	 
	 return (
	 <div>
	 <MyRouterforThree name = {this.state.username} party = {this.state.party}/>
	</div>
	)
 }
 else{
	 return (
	   <div>
	   
	   <Login msg ="Please fill correct user of Organization with channel"/>
	   </div>
 )
 }
  }
}
  export default Login;
 