import React from 'react'
import players from './players'
import Player from './Player'
import './Player.css'

function PlayerList() {
  return (
    <div className='style'>
        { players.map(e => <Player info={e}></Player>)}
    </div>
  )
}

export default PlayerList
