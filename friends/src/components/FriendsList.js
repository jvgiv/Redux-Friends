import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { getData } from '../actions/friendData'

class FriendsList extends Component {

    componentDidMount() {
        this.props.getData()
    }
    render() {
        // console.log(this.props.friends)
        const listOfFriends = {
            borderRadius: '5px',
            boxShadow: "5px 5px 5px #ccc",
            margin: '10px auto',
            border: '1px solid black',
            width: '60%',
            textAlign: 'center'
        }
    return (
      <div>
          {this.props.friends.map(eachItem => (
              <div style={listOfFriends}>
                <h2>{eachItem.name}</h2>
                <h3>{eachItem.age}</h3>
                <h3>{eachItem.email}</h3>
              </div>
          ))}
        {/* <h1>cat</h1> */}
      </div>
    )
  }
}

const mapStateToProps = ({ friends, fetchingFriends }) => ({
    friends,
    fetchingFriends
})

export default withRouter(
    connect(
        mapStateToProps,
        { getData }
    )(FriendsList)
)