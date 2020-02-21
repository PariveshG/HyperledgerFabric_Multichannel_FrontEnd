import React from 'react';
import {Link} from 'react-router-dom';
import Createkyc from "./createkyc";
import axios from 'axios';
import './formcdn.css';

class FormCdn extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            id: "",
            name: "",
            dob: "",
            phone:"",
            email:"",
            address:""
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
const nik = this.state.id;
const name = this.state.name;
const dateOfBirth =this.state.dob;
const phone = this.state.phone;
const email =this.state.email;
const address = this.state.address;
const data = {
    nik,name,dateOfBirth,phone,email,address
}

axios.post('http://54.180.85.11:9005/createPiiMetaData', { data })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })


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
         
        <h2>Create KYC</h2>
        <div className="row">
          <div className="col-sm-3">
            <form onSubmit={this.postData.bind(this)} >
            <div className="form-group" id="one">
                <label for="Unique Id">Unique Id</label>
                <input type="text" name="id" value={this.state.id} onChange={this.datChange.bind(this)} className="form-control" />
              
                <label for="Name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
                <label for="DOB">DOB</label>
                <input type="text" name="dob" value={this.state.dob} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
                <label for="Phone">Phone</label>
                <input type="text" name="phone" value={this.state.phone} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
              <label for="Email">Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              <div className="form-group">
              <label for="Address">Address</label>
                <input type="text" name="address" value={this.state.address} onChange={this.datChange.bind(this)} className="form-control" />
              </div>
              
              <div className="form-group">
                <button  className="btn btn-primary" >Send</button>
               
              </div>
            </form>
          </div>
          
        </div>
        {this.state.isEmptyState && <Createkyc />}
      </div>
    )
  }
}

export default FormCdn;