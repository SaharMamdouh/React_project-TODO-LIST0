import React, { Component } from 'react'
import './App.css';

class Login2 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email:"",
             password:""
            
        }
    }
    
    fetchData=(e)=>{
        e.preventDefault();
        this.setState({email:e.target.email.value,password:e.target.password.value})
        alert(`the email is ${this.state.email}`)
        
    }

    render() {
        return (
            <div className="formlogin">
                <form onSubmit={this.fetchData}>
                   Email: <input type="text" name="email"/><br></br>
                   <br></br>
                   Password: <input type="password" name="password"/><br></br>
                   <br></br>
                   <button className="btn">Login</button>
                </form>
                <div>{this.state.email}  {this.state.password}</div>
            </div>
        )
    }
}

export default Login2
