import React, { Component } from 'react'

export default class Home extends Component {
  render() {
      const game = {
          width: '900px',
          height: '1000px',
          margin: '0 auto',
          borderRadius: '5px'
      }
    return (
      <div style={game}>
        <iframe name="plugin" src="http://www.thewayoftheninja.org/Nv2.swf" type="application/x-shockwave-flash" style={game} />
      </div>
    )
  }
}

