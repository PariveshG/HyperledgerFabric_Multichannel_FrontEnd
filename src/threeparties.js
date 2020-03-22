import React, { Component } from 'react';  
import MaterialTable from 'material-table'; 
import {Link} from 'react-router-dom';
import axios from 'axios';
  
class ThreeParties extends Component {  

  constructor(props) 
    { 
        super(props); 
  this.state = { users: [] };
        
  
           } 
 
  componentDidMount() {
	  
    fetch(`http://54.180.32.186:4000/channels/channelall/chaincodes/mycc?peer=peer0.${this.props.party.toLowerCase()}.example.com&fcn=queryAllTrades&args=%5B%22a%22%5D&username=${this.props.name}&orgName=${this.props.party}`, {
  method: 'GET',
  headers: {  
    'X-Mashape-Key': 'required',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
      }
}).then(results => results.json())
      .then(data => {
		        const users = data;
        this.setState({ users });
      }).catch(err => console.log(err))
  }
  

  render() {  
  
 
  
       const columns = [{ title: 'TradeId', field: 'Record.tradeID', editable: 'never' },
      { title: 'FromParty', field: 'Record.fromParty', editable: 'never'},
      { title: 'ToParties', field: 'Record.toParty', editable: 'never' },
	  { title: 'Amount', field: 'Record.amount', editable: 'never' },
	  { title: 'Created Time', field: 'Record.ctime', editable: 'never' },
   	  { title: 'Status', field: 'Record.status', editable: 'never'},
	  ]  
	 
    return (  
	
         
    <MaterialTable 
      title="Results"
      columns={columns}
      data={this.state.users}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const users = [...prevState.users];
                users.push(newData);
				console.log(newData.Record.tradeID);
				 axios.post('http://54.180.32.186:4000/channels/channelall/chaincodes/mycc', { fcn: 'createCar',
     args: [ newData.Record.tradeID, newData.Record.fromParty, newData.Record.toParty, newData.Record.amount, newData.Record.status ],
     username: 'Jim',
     orgName: 'Org1' },).then(res => {
        console.log(res);
        console.log(res.data);
		alert("Successfully Create Record");
      })
                return { ...prevState, users };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                this.setState(prevState => {
                   //updateStatus(oldData.Key,"In Progress");
				   const users = [...prevState.users];
                  users[users.indexOf(oldData)] = newData;
				  const vg = Object.values(newData);
				  		if(vg[1].status !== 'Received' && vg[1].status == 'Created'){throw 'Unknown Status'};	  
				  axios.post('http://54.180.32.186:4000/channels/channelall/chaincodes/mycc', { fcn: 'updateStatus',
     args: [ vg[0],vg[1].status],
     username: this.props.name,
     orgName: this.props.party },).then(res => {
      //  console.log(res);
      //  console.log(res.data);
		alert("Successfully Update Record");
      })
                  return { ...prevState, users };
                });
              }
            }, 600);
          }),
      
      }}
    />
      
    )  
  }  
}  
export default ThreeParties; 