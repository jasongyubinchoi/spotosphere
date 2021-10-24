import React from 'react'


const Playlist = ({ weather, timeOfDay }) => {
    const musicPlayer = (weather, timeOfDay) => {
        // return <iframe title="Uplifting" src="https://open.spotify.com/embed/playlist/3a8ssl2IKbhSmEzzIPYvbC" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        if (timeOfDay === 'morning') {
            if (weather === 'sunny' || weather === 'moon')
                return <iframe title="Uplifting" src="https://open.spotify.com/embed/playlist/3a8ssl2IKbhSmEzzIPYvbC" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'cloudy')
                return <iframe title="Calm" src="https://open.spotify.com/embed/playlist/0lU86qLkSQVI991j4BUTDF" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'rainy')
                return <iframe title="Sad" src="https://open.spotify.com/embed/playlist/44tRfteJJzAmUONSiA56bQ" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'thunder')
                return <iframe title="Rock" src="https://open.spotify.com/embed/playlist/0ND34U5LGn1O77FZrxvveu" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        } else if (timeOfDay === 'afternoon') {
            if (weather === 'sunny')
                return <iframe title="Upbeat" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'cloudy')
                return <iframe title="Study" src="https://open.spotify.com/embed/playlist/471N195f5jAVs086lzYglw" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'rainy')
                return <iframe title="Blues" src="https://open.spotify.com/embed/playlist/4NDZh9ULqIo3GTvdt68xi3" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'thunder')
                return <iframe title="Hyperpop" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX7HOk71GPfSw" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        } else if (timeOfDay === 'evening') {
            if (weather === 'sunny' || weather === 'moon')
                return <iframe title="Alternative" src="https://open.spotify.com/embed/playlist/1CLtZgIOMHYBSfndPzyBOS" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'cloudy')
                return <iframe title="Tik-Tok" src="https://open.spotify.com/embed/playlist/6RXgHyqUiEbSmX7NQZ05yQ" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'rainy')
                return <iframe title="Hip-Hop" src="https://open.spotify.com/embed/playlist/0FAb3s3yJArWnikZbEOO9p" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'thunder')
                return <iframe title="Heavy Metal" src="https://open.spotify.com/embed/album/6FFHZZvoagWTsyp1M80gaR" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        } else if (timeOfDay === 'night') {
            if ((weather === 'sunny' || weather === 'moon'))
                return <iframe title="Classical" src="https://open.spotify.com/embed/playlist/1h0CEZCm6IbFTbxThn6Xcs" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'cloudy')
                return <iframe title="R/B" src="https://open.spotify.com/embed/playlist/37i9dQZF1EQoqCH7BwIYb7" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'rainy')
                return <iframe title="Rainy Nights" src="https://open.spotify.com/embed/playlist/4dlYSpSOZjDZizTaiX7Kjy" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            else if (weather === 'thunder')
                return <iframe title="Lofi" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWWQRwui0ExPn" width="100%" height="650" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        } else {
            alert("Error")
        }
    }
    return (
        <div>
            {musicPlayer(weather, timeOfDay)}
        </div>
    );
}

export default Playlist
