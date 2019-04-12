import React, { Component } from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'
import { login } from '../actions/login'

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
  
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/protected')
        })
    }


    render() {
        const inputStyle = {
            width: '60%',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center'
        }

        const input = {
            width: '35%',
            borderRadius: '5px',
            textAlign: 'center',
            margin: '10px auto'
        }

    return (
      <div style={inputStyle}>
        <form onSubmit={this.login}>
          <input
            style={input}
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <br/>
          <input
            style={input}
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <br/>
          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              'Log in'
            )}
          </button>
        </form>
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    )
  }
}

const mapStateToProps = ({ loggingIn, error }) => ({
    error,
    loggingIn
  });


export default connect(mapStateToProps, { login })(Login)