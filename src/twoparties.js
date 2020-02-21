import React, { Component } from 'react';  
import MaterialTable from 'material-table'; 
import {Link} from 'react-router-dom';
import axios from 'axios';
  
class TwoParties extends Component {  

state = { users: [] };
 
  componentDidMount() {
	  
    fetch("http://52.78.0.153:4000/channels/channel12/chaincodes/mycc?peer=peer0.org2.example.com&fcn=queryAllTrades&args=%5B%22a%22%5D&username=Barry&orgName=Org2", {
  method: 'GET',
  headers: {  
    'X-Mashape-Key': 'required',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
	'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODE2MTE2MzUsInVzZXJuYW1lIjoiQmFycnkiLCJvcmdOYW1lIjoiT3JnMiIsImlhdCI6MTU4MTU3NTYzNX0.oHQqJ4QKaUjSqTwcjNIz3KxBgZ2YviDXcEMqXP5hnto",
      }
}).then(results => results.json())
      .then(data => {
		        const users = data;
        this.setState({ users });
      }).catch(err => console.log(err))
  }
  

  render() {  
  
 
  
    // const data = [{"Key":"Trade7", "Record":{"tradeID":"Trade7","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:14"}},{"Key":"Trade8", "Record":{"tradeID":"Trade8","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:32"}}]
     const columns = [{ title: 'TradeId', field: 'Record.tradeID', editable: 'never' },
      { title: 'FromParty', field: 'Record.fromParty', editable: 'never'},
      { title: 'ToParties', field: 'Record.toParty', editable: 'never' },
	  { title: 'Amount', field: 'Record.amount', editable: 'never' },
	  { title: 'Created Time', field: 'Record.ctime', editable: 'never' },
   	  { title: 'Status', field: 'Record.status',},
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
				 axios.post('http://52.78.0.153:4000/channels/channel12/chaincodes/mycc', { fcn: 'createCar',
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
				  				  
				  axios.post('http://52.78.0.153:4000/channels/channel12/chaincodes/mycc', { fcn: 'updateStatus',
     args: [ vg[0],vg[1].status],
     username: 'Jim',
     orgName: 'Org1' },).then(res => {
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
export default TwoParties; 