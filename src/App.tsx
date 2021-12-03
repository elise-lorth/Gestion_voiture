import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import VoiturePage from "./pages/VoiturePage";
import PhotoPage from "./pages/PhotoPage";
import VideoPage from "./pages/VideoPage";
import HomePage from "./pages/HomePage";


function App() {
    return (
        <div>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/voiture' component={VoiturePage}/>
                    <Route path='/photo' component={PhotoPage}/>
                    <Route path='/video' component={VideoPage}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
