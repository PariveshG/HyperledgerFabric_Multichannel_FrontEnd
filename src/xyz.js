//import React from 'react';
import MaterialTable from 'material-table';
import React, { Component } from 'react';

export default function MaterialTableDemo() extends Component{
var state = { users: [] };
   
   function aa(){
    fetch('http://52.78.0.153:4000/channels/mychannel/chaincodes/mycc?peer=peer0.org3.example.com&fcn=queryAllTrades&args=%5B%22a%22%5D', {
       method: 'GET',
       headers:{
         Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1ODE0ODMxNTAsInVzZXJuYW1lIjoiSmltIiwib3JnTmFtZSI6Ik9yZzEiLCJpYXQiOjE1ODE0NDcxNTB9.1MI9cQ2WJv8LwZ0oYz7Nf81EuOWGOjzVyeQ8FsYbrHc",
          },
     })
         .then(res => console.log(res.json()))
   }
 

  return (
    <div>
      aa()
      </div>
  );
}
