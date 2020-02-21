import React, { Component } from 'react';  
import MaterialTable from 'material-table'; 
  
class Demo extends Component {  

state = { users: [] };
 // datass = { username: 'Parivesh', orgName: 'Org3'};
  componentDidMount() {
	  
    fetch("http://52.78.0.153:4000/channels/mychannel/chaincodes/mycc?peer=peer0.org3.example.com&fcn=queryAllTrades&args=%5B%22a%22%5D&username=Jim&orgName=Org1", {
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
  
    function updateStatus(key, status) {
	  const datas = { fcn: 'updateStatus', args:[key,'InProgress'] };
    fetch("http://localhost:4000/channels/mychannel/chaincodes/mycc", {
  method: 'POST',
  headers: {  
    'X-Mashape-Key': 'required',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
	'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODE1NjYzNjUsInVzZXJuYW1lIjoiQmFycnkiLCJvcmdOYW1lIjoiT3JnMiIsImlhdCI6MTU4MTUzMDM2NX0.mVumEX2fT6w4ha5iqhAZo7K5Q-LNB76PGEdyyzpsL_E",
    'body': JSON.stringify(datas),
  }
}).then(results => results.json())
      .then(data => {
        const users = data;
      //  this.setState({ users });
      }).catch(err => console.log(err))
  }
  
  
    // const data = [{"Key":"Trade7", "Record":{"tradeID":"Trade7","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:14"}},{"Key":"Trade8", "Record":{"tradeID":"Trade8","fromParty":"PartyA","toParty":"PartyB","amount":200,"status":"Submitted","ctime":"2020-02-12 04:50:32"}}]
     const columns = [{ title: 'TradeId', field: 'Record.tradeID' },
      { title: 'FromParty', field: 'Record.fromParty'},
      { title: 'ToParty', field: 'Record.toParty' },
	  { title: 'Amount', field: 'Record.amount' },
	  { title: 'Created Time', field: 'Record.ctime' },
   	  { title: 'Status', field: 'Record.status' },
	  ]  
	  console.log(this.state.users[0])
    return (  
	
         
    <MaterialTable 
      title="KYC Management"
      columns={columns}
      data={this.state.users}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
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
				                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              this.setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
      
    )  
  }  
}  
export default Demo; 