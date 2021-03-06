import React from 'react';
import {Link} from 'react-router-dom';
import Createkyc from "./createkyc";
import axios from 'axios';
import './formcdn.css';

 // const data = [{"Key":"Trade7", "Record":{"tradeID":"Trade7","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:14"}},{"Key":"Trade8", "Record":{"tradeID":"Trade8","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:32"}}]

class CreateTrade extends React.Component {
	state = { users: [] };
    constructor(props) {
        super(props)
        this.state = { 
            tradeID: "",
            fromParty: "",
            toParty: "",
            amount:"",
            status:"",
           username:"",
         }
       // this.datChange = this.datChange.bind(this);
      }
      datChange(ev){
 this.setState({
    [ ev.target.name ] : ev.target.value 
 })
      }

postData(e){
e.preventDefault();
const tradeID = this.state.tradeID;
const fromParty = this.state.fromParty;
const toParty =this.state.toParty;
const amount = this.state.amount;
const status ='Created';
const username =this.state.username;

const data = {
    //tradeID,fromParty,toParty,amount,status,ctime
	'fcn': 'createCar', 'args': ["Trade12","PartyA","PartyB","200","Submitted"],"username": "Jim","orgName": "Org1"
}

if(username=='Jim' && fromParty=='Org1' || username=='Barry' && fromParty=='Org2' || username=='Parivesh' && fromParty=='Org3' ){
  axios.post('http://54.180.32.186:4000/channels/channelall/chaincodes/mycc', { fcn: 'createCar',
     args: [ tradeID, fromParty, 'Org1 Org2 Org3', amount, 'Created' ],
     username: username,
     orgName: fromParty },).then(res => {
        console.log(res);
        console.log(res.data);
		alert("Success");
      })
}else{
	alert("Please try again. Provided credentials are wrong.");
}
}

       handleSubmit = event => {
       
        this.setState({
             isEmptyState: true,
       
       })
         event.preventDefault();
                 
       }
  render() {
   
    return(
      <div className="container">
         
      <br></br>
        <h4>Trade For All Parties</h4>
		<br></br>
        <div className="row">
          <div className="col-sm-3">
            <form onSubmit={this.postData.bind(this)} >
			
            <div className="form-group" id="one">
                <label for="TradeId">TradeId</label>
                <input type="text" name="tradeID" value={this.state.tradeID} onChange={this.datChange.bind(this)} className="form-control" />
               </div>
			     <div className="form-group" >
                <label for="Username">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.datChange.bind(this)} className="form-control" />
               </div>
			   <div className="form-group">
                <label for="FromParty">FromParty</label>
                <input type="text" name="fromParty" value={this.state.fromParty} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
                <label for="ToParties">ToParties</label>
				<select class="custom-select custom-select-sm">
  <option selected>Select Parties</option>
  <option name="ToParty" value={this.state.toParty} onChange={this.datChange.bind(this)}>Org1 Org2 Org3</option>
</select>                
				</div>
              <div className="form-group">
                <label for="Amount">Amount</label>
                <input type="text" name="amount" value={this.state.amount} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
              <label for="Status">Status</label>
			  <select class="custom-select custom-select-sm">
				<option name="Status --" value={this.state.status} onChange={this.datChange.bind(this)}>Created</option>
				</select>     
                           </div>
						
				<div>
				&nbsp;
				&nbsp;
				</div>
              <div className="form-group">
                <button  className="btn btn-dark" >Submit</button>
               
              </div>
            </form>
          </div>
          
        </div>
        {this.state.isEmptyState && <Createkyc />}
      </div>
    )
  }
}

export default CreateTrade;