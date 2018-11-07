import * as React from 'react';
import './scroll.css';

type Props = {
  children: JSX.Element
}

const Scroll = ({ children }: { children: Props }) => {
  return (
    <div className='scrollable'>
      {children}
    </div>
  )
}

export default Scroll;
