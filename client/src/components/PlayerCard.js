import React from 'react';

const PlayerCard = ({player}) => {
    const { name, rank, team } = player
    return (  
        <div className='card-wrapper'>
            <h2 className='card-name'>{name}</h2>
            <h3 className='card-rank'>{rank}</h3>
            <h3 className='card-team'>{team}</h3>
        </div>
    );
}
 
export default PlayerCard;