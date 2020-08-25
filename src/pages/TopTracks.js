import React from 'react';
import { withRouter } from 'react-router-dom';

import Player from '../components/Player';
import Track from '../components/Track';

import { checkAndReturnToken } from '../utils';

// import './TopTracks.css';

class TopTracks extends React.Component {

    state = {
        tracks: [],
        currentTrackId: null
    };

    componentDidMount() {

        const artistId = this.props.match && this.props.match.params ?
            this.props.match.params.id : null;

        if (artistId) {

            const token = checkAndReturnToken(this.props.history);

            if (token === null) {
                return;
            }

            fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?country=RO`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(result => {
                console.log(result)
                return result.json();
            }).then(data => {
                const tracks = data.tracks.map(track => {

                    return {
                        id: track.id,
                        name: track.name,
                        duration: track.duration_ms ?
                            track.duration_ms / 60000 : 0,
                        album: track.album ?
                            track.album.name : ''
                    }
                });

                this.setState({
                    tracks: tracks
                });
            });
        }

    }

    onTrackClickedHandler = (id) => {
        this.setState({
            currentTrackId: id
        })
    };

    render() {

        const artistName = this.props.location && this.props.location.state ?
            this.props.location.state.artistName : 'Default';

        return (
            <div>
                <h1>
                    {
                        artistName
                    }
                </h1>
                <section className="content__wrapper">
                    <section className="section__tracks">
                        <ul className="tracks__wrapper">
                            { this.state.tracks.map((track, index) => {

                                const isTrackPicked = track.id === this.state.currentTrackId;

                                return (
                                    <Track
                                        key={`Track${track.id}${index}`}
                                        pickTrack={this.onTrackClickedHandler}
                                        id={track.id}
                                        name={track.name}
                                        album={track.album}
                                        duration={track.duration}
                                        isTrackPicked={isTrackPicked}
                                    />
                                )
                            })}
                        </ul>
                    </section>
                    <section className="section__player">
                        <Player
                            trackId={this.state.currentTrackId}
                        />
                    </section>
                </section>
            </div>
        )
    }
}

export default withRouter(TopTracks);