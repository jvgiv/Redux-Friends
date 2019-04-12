import React, { Component } from 'react';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Home from './components/Home'

class App extends Component {
  render() {
    const Container = {
      width: '60%',
      margin: '16px auto',
      border: '1px solid black',
      borderRadius: '6px',
      textAlign: 'center',
      padding: '10px 0 0 0',
      boxShadow: "5px 5px 5px #ccc",
    }

    return (
      <Router>
        <div style={Container}>
          <h1>Welcome to the Friends List</h1>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>    
            </li>   
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
      </Router>
    );
  }
}

export default App;
