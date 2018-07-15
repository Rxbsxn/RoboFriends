import React from 'react';
import './scroll.css'

const Scroll = ({ children }) => {
  return (
    <div className='scrollable'>
      {children}
    </div>
  )
}

export default Scroll;