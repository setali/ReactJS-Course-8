import React, { Component } from 'react'
import ACL from './ACL'

class Button extends Component {
  render () {
    console.log(this.props.permission)
    return <button {...this.props}>{this.props.children}</button>
  }
}


export default ACL(Button)
