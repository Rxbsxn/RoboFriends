import React, { Component } from 'react';
import './hello.css'

class Hello extends Component {
  render() {
    return (
      <div className="f3 tc">
        <h1>Hello World Cruel React</h1>
        <p>{this.props.greeting}</p>
      </div>
    )
  }
}

export default Hello;