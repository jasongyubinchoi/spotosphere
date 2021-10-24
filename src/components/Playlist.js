import React from 'react'

const Playlist = () => {
    let weather = 'cloudy'
    // let time = 'day'
    return (
        <div className="widget-container">
            {weather === 'good' ? (
                <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            ) : (
                <iframe src="https://open.spotify.com/embed/playlist/0lU86qLkSQVI991j4BUTDF" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            )
            }

        </div>
    )
}

export default Playlist
