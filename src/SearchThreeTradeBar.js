import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MaterialTable from 'material-table'; 
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class SearchThreeTradeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: "Search for trade ....... ",
      currentText: "",
	  searchT: 'blank',
	  users: [],
	  searchedVal: '',
    }
  }
 
      datChange(ev){
 this.setState({
    [ ev.target.name ] : ev.target.value 
 })
      }
	  
postData(e){
e.preventDefault();
const currentText = this.state.currentText;
this.setState({searchT : 'fill'})
this.setState({searchedVal : 'Result of TradeID - ' + currentText})
axios.get(`http://54.180.32.186:4000/channels/channelall/chaincodes/mycc?peer=peer0.${this.props.party.toLowerCase()}.example.com&fcn=query&args=%5B%22${this.state.currentText}%22%5D&username=${this.props.name}&orgName=${this.props.party}`,
    ).then(response => {
		const users1 = response.data;
        const arr = [];
		arr.push(users1);
        this.setState({ users : arr});
      }).catch(err => console.log(err))


}	

	
  render() {
	  var mystyle = {
   float: 'auto 0',
  padding: '6px',
  //border: 'none',
backgroundColor: 'white',

  fontSize: '17px',
 }
 
  var buttonp = {
float: 'auto 0',
  padding: '6px 10px',
  marginTop: '60px',
  marginRight: '16px',
  background: '#ddd',
  fontSize: '17px',
  border: 'none',
  cursor: 'pointer',
  }
  
  var box = {
    width: '100%',
    textAlign: 'center',
	marginTop: '60px',
}

    const columns = [{ title: 'TradeId', field: 'tradeID' },
      { title: 'FromParty', field: 'fromParty'},
      { title: 'ToParties', field: 'toParty' },
	  { title: 'Amount', field: 'amount' },
	  { title: 'Created Time', field: 'ctime' },
   	  { title: 'Status', field: 'status' },
	  ] 


    return (
        <div>
        
         <div style = {box}>
            <form onSubmit={this.postData.bind(this)} >
              <label for="TradeId">Search For TradeID</label>&nbsp;&nbsp;&nbsp;&nbsp;
			  <input type="text" placeholder={this.state.initialState} style = {mystyle} name="currentText" value={this.state.currentText} onChange={this.datChange.bind(this)} />
               
			  <button  style = {buttonp} >Search</button>
              </form>
          </div>
        
    <MaterialTable 
      title= {this.state.searchedVal}
      columns={columns}
      data={this.state.users}
	  
   />
	  
	   </div>
  );

  }

}
  

