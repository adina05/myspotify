import React from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import './App.css';

import About from "./pages/About";
import Categories from "./pages/Categories";
import Category from "./components/Category";
import Header from "./components/Header";
import Login from "./pages/Login";
import Playlists from "./components/Playlists";
import SpotifyCallback from "./pages/SpotifyCallback";
import Tracks from './pages/Tracks';

function App() {


    // return (
    //     <div className="App">
    //         <header className="App-header">
    //             <a href="/categories">Link to  another page </a>
    //             <LabeledInput
    //                 id="client-id"
    //                 label="Client Id"
    //                 placeholder="Client Id Placeholder"
    //                 defaultValue="Default"
    //             />
    //         </header>
    //     </div>
    // );

    return (
        <div className="App">
            <Header></Header>
            <main>
                <Switch>
                <Route
                    path="/"
                    exact={true}
                    render={ () => <div>Home page</div>}/>
                <Route
                    path="/about"
                    component={About}/>
                <Route
                    path="/login"
                    component={Login}/>
                <Route
                     path="/categories"
                     exact
                     component={Categories}/>
                <Route
                     path="/categories/:id"
                     component={Category}/>
                <Route
                     path="/playlists/:id"
                     component={Playlists}/>
                <Route
                     path="/callback"
                     component={SpotifyCallback}/>
                <Route
                     path="/tracks/:id"
                     component={Tracks}
                    />
                </Switch>
            </main>
        </div>
    );
}

export default App;