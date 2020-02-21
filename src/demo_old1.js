import React from 'react';

import axios from 'axios';

export default class Demo extends React.Component {
 state = { users: [] };

  componentDidMount() {
	  
    fetch("http://52.78.0.153:4000/channels/mychannel/chaincodes/mycc?peer=peer0.org3.example.com&fcn=queryAllTrades&args=%5B%22a%22%5D", {
  method: 'GET',
  headers: {  
    'X-Mashape-Key': 'required',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
	'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODE1MzU0NTIsInVzZXJuYW1lIjoiQmFycnkiLCJvcmdOYW1lIjoiT3JnMiIsImlhdCI6MTU4MTQ5OTQ1Mn0.xUaJuQSZyJ-VTPSEiFko8umm6YJ0pGSGJ0IjFsqZV6E",
  }
}).then(results => results.json())
      .then(data => {
        const users = data;
        this.setState({ users });
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        {this.state.users.map((user, index) => {
			console.log(user)
          return (
            <div key={index}>
              <div>{user.Key}</div>
			  <div>{user.Record.tradeID}</div>
			  <div>{user.Record.fromParty}</div>
			  <div>{user.Record.toParty}</div>
			  <div>{user.Record.status}</div>
			  <div>{user.Record.amount}</div>
			  <div>{user.Record.ctime}</div>
            </div>
          );
        })}
      </div>
    );
  }
}