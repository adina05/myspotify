import React from "react";
import "./Home.css"

const Home = () => {
    return (
        <div className="homepage">
            <h1 className="home__title">Looking for music?</h1>

            <p className="home__text">There are millions of tracks and episodes on Spotify.
                So whether you’re behind the wheel, working out, partying or relaxing,
                the right music or podcast is always at your fingertips.
                Choose what you want to listen to, or let Spotify surprise you.</p>

            <h3>Soundtrack your life with Spotify.
                Subscribe or listen for free. </h3>
            <img src={require("../Image/image.png")} />

        </div>
    )
}


export default Home;