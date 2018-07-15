import React from 'react';
import './hello.css'

const Hello = (props) => {
  return (
    <div className="f3 tc">
    <h1>Hello World Cruel React</h1>
    <p>{props.greeting}</p>
    </div>
  )
}
export default Hello;