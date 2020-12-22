import React from 'react';

const LibarySong = ({ song, songs, setCurrentSong, id }) => {

    const songSelectHandler = () => {
        const selectedSong = songs.filter((state) => state.id === id)
        setCurrentSong(selectedSong[0])
    }

    return (
        <div onClick={songSelectHandler} className="libarys-song">
            <img src={song.cover} alt="" />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibarySong;