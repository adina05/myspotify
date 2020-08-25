import React from 'react';
import { Link, Route, Switch, withRouter } from "react-router-dom";
import './App.css';

import About from "./pages/About";
import Artists from "./pages/Artists";
import Categories from "./pages/Categories";
import Category from "./components/Category";
import Header from "./components/Header";
import ErrorBoundary from './pages/ErrorBoundary';
import Login from './pages/Login';
import Playlists from "./pages/Playlists";
import SpotifyCallback from "./pages/SpotifyCallback";
import Tracks from './pages/Tracks';
import SearchBar from "./components/SearchBar";


function App() {

    return (
        <div className="App">
            <ErrorBoundary>
            <Header/>
                <SearchBar/>
            <main>
                <Switch>

                    <Route
                        path="/about"
                        component={About}/>
                    <Route
                        path="/artists*"
                        exact
                        component={Artists}/>
                    <Route
                         path="/categories*"
                         exact
                         component={Categories}/>
                         <Route
                         path="/categories"
                         component={Category}/>
                    <Route
                         path="/login"
                         component={Login}/>
                    <Route
                         path="/playlists/:id"
                         component={Tracks}/>
                    <Route
                         path="/callback"
                         component={SpotifyCallback}/>
                </Switch>
            </main>
        </ErrorBoundary>
        </div>
    );
}


export default App;