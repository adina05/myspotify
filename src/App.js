import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import About from "./pages/About";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Header from "./Header";
import Login from "./pages/Login";
import SpotifyCallback from "./pages/SpotifyCallback";


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
                     path="/callback"
                     component={SpotifyCallback}/>
                </Switch>
            </main>
        </div>
    );
}

export default App;