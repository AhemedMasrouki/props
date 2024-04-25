// Import inside the PlayerList.js, the Player component and the players’ data from players.js

import Player from "./Player";
import players from "./players";
import React from 'react'

const PlayerList = () => {
  return (
    <div className="App" style={{display:"flex"}}>
      {players.map((el) => (<Player player={el} />))}
    </div>
  )
}

export default PlayerList