import React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import Artist from '../components/Artist';
// import "./Artists.css";
import { checkAndReturnToken } from '../utils';
import TopTracks from "./TopTracks";



class Artists extends React.Component{

    componentWillUnmount() {
        console.log(`Artists inside componentWillUnmount`)
    }

    state={
        artists:[],
        isLoading:false
    };

    async componentDidMount() {

        try{
            const token = checkAndReturnToken(this.props.history);

            if (token === null) {
                return;
            }

            this.setState({
                isLoading: true
            });

            const result = await fetch('https://api.spotify.com/v1/artists?ids=0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin', {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await result.json();

            const artists = data.artists.map(item => {
                return {
                    id: item.id,
                    name: item.name,
                    url: item.images && item.images.length > 0 ?
                        item.images[0].url : ''
                }
            });

            this.setState({
                artists: artists,
                isLoading: false
            })
        } catch (error) {
            console.log(error)
            throw new Error('Failed to fetch data');
        } finally {
            console.log('I am finally here')
            this.setState({
                isLoading: false
            })
        }
    }

    render(){

        let artistsSection = null;

        if (this.state.isLoading) {
            artistsSection = (
                <BounceLoader
                    color="#21D4FD"
                    css={{
                        margin: '0 auto'
                    }}
                />
            );
        } else if (this.state.artists && this.state.artists.length > 0) {
            artistsSection =  this.state.artists
                .map(item => {
                    return (
                        <Artist
                            key={`Artist${item.id}`}
                            name={item.name}
                            id={item.id}
                            url={item.url}
                        />
                    )
                });
        } else {
            artistsSection = 'Niciun artist gasit.';
        }

        return (
            <div className="categories__wrapper">
                <Switch>
                    <Route
                        path={`${this.props.match.path}/:id`}
                        component={TopTracks}
                    />
                    <Route
                        path={`${this.props.match.path}*`}
                    >
                        { artistsSection }
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Artists);
