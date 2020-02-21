import React from 'react';
import {Link} from 'react-router-dom';
import Createkyc from "./createkyc";
import axios from 'axios';
import './formcdn.css';

 // const data = [{"Key":"Trade7", "Record":{"tradeID":"Trade7","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:14"}},{"Key":"Trade8", "Record":{"tradeID":"Trade8","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:32"}}]

class CreateTwoTrade extends React.Component {
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
const status =this.state.status;
const username =this.state.username;

const data = {
    //tradeID,fromParty,toParty,amount,status,ctime
	'fcn': 'createCar', 'args': ["Trade12","PartyA","PartyB","200","Submitted"],"username": "Jim","orgName": "Org1"
}

if(username=='Jim' && fromParty=='Org1' || username=='Barry' && fromParty=='Org2'){
  axios.post('http://52.78.0.153:4000/channels/channel12/chaincodes/mycc', { fcn: 'createCar',
     args: [ tradeID, fromParty, 'Org1 Org2', amount, status ],
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
        alert("good")
        this.setState({
             isEmptyState: true,
       
       })
         event.preventDefault();
                 
       }
  render() {
   
    return(
      <div className="container">
     <br></br>
        <h4>Trade For Two Parties</h4>
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
			<option name="ToParty" value={this.state.toParty} onChange={this.datChange.bind(this)}>Org1 Org2</option>
			</select>                
				</div>
              <div className="form-group">
                <label for="Amount">Amount</label>
                <input type="text" name="amount" value={this.state.amount} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
              <label for="Status">Status</label>
                <input type="text" name="status" value={this.state.status} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
                <button  className="btn btn-dark" id="btnfirst">&nbsp;Submit</button>
               
              </div>
            </form>
          </div>
          
        </div>
        {this.state.isEmptyState && <Createkyc />}
      </div>
    )
  }
}

export default CreateTwoTrade;