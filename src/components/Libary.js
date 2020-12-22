import React from 'react';

import LibarySong from './Libary-song'

const Libary = ({ songs, setCurrentSong }) => {
    return (
        <div className='libary'>
            <h2>Libary</h2>
            <div className='liabry-songs'>
                {songs.map(song => (
                    <LibarySong key={song.id} id={song.id} songs={songs} song={song} setCurrentSong={setCurrentSong} />
                ))}
            </div>
        </div>
    )
}

export default Libary;