import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fname:"",
             lname:"",
             email:"",
             pass:""
        }
    }
    
    fnameHandler=(e)=>{
        
         return  this.setState({fname:[e.target.value]})
      }
  

      lnameHandler=(e)=>{
        
         return  this.setState({lname:[e.target.value]})
      }

      emailHandler=(e)=>{
        
        return  this.setState({email:[e.target.value]})
     }
  
      passwordHandler=(e)=>{
       
          return  this.setState({pass:[e.target.value]})
      }
    render() {
        
        return (
            <div className="formlogin">
                <form>
                   Firstname: <input type="text" value={this.state.fname} onChange={this.fnameHandler}/><br/>
                   Lastname: <input type="text" value={this.state.lname} onChange={this.lnameHandler}/><br/>
                   Email: <input type="email"  required value={this.state.email} onChange={this.emailHandler}/><br/>
                   Password: <input type="password" value={this.state.pass} onChange={this.passwordHandler}/><br/>
                   <button className="btn">Register</button>

                </form>
            </div>
        )
    }
}

export default Register
