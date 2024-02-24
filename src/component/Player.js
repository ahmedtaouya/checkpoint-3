import React from 'react'
import { Players } from '../Players'
import Playerscard from './Playerscard'


function Player() {
  return (
    <div>
       <div>
      {Players.map((player, index) => (
        <Playerscard
          key={index}
          Name={player.name}
          Age={player.age}
          Team={player.team}
          Position={player.position}
          ImgUrl={player.ImgUrl}
        />
      ))}
    </div>
    </div>
  )
}

export default Player
