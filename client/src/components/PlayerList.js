import React from 'react';
import PlayerCard from './PlayerCard'

const PlayerList = ({players}) => {
    return (  
        <div className='container'>
            {players.map(plr => (
                <PlayerCard player={plr} />
            ))}
        </div>
    );
}
 
export default PlayerList;