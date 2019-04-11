import React, { Component } from 'react';
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Welcome to the Friends List</h1>
          <ul>
            <li>
              <Link to='/login'>Login</Link>    
            </li>   
            <li>
              <Link to='/protected'>Protected Page</Link>
            </li>
          </ul>
        </div>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsList} />
      </Router>
    );
  }
}

export default App;
