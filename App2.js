import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login2 from "./Login2";
import Register from "./Register";
import TODO from "./TODO";
import './App.css';
import Home from "./Home";

import React, { Component } from 'react'

class App2 extends Component {
    render() {
        return (
            <Router>
                <div >
                    <ul className="container">
                        <li>
                            <Link className="link" to="/Home">Home</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Login2">Login</Link>
                        </li>
                        <li>
                            <Link className="link" to="/Register">Register</Link>
                        </li>
                        <li>
                            <Link className="link" to="/TODO">ToDo</Link>
                        </li>
                    </ul>
                    <Switch>
                       <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/Login2">
                            <Login2 />
                        </Route>
                        <Route path="/Register">
                            <Register />
                        </Route>
                        <Route path="/TODO">
                            <TODO />
                        </Route>
                    </Switch>
                </div >
            </Router>
        )
    }
}

export default App2
