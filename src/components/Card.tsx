import * as React from 'react';

interface ICardStatelessProps {
  name: string,
  email: string,
  id: number
}

const Card: React.SFC<ICardStatelessProps> = ({ name, email, id }) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card;
