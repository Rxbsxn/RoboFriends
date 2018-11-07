import * as React from 'react';
import Card from './Card';

import { IRobot } from '../containers/App';



export const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  const cardComponent = robots.map((robot, i) => {
    return <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
  });
  return (
    <div>
      {cardComponent}
    </div>
  )
}
