import React, {Suspense} from 'react';
import Counter from "./Components/Counter";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";
import MainPage from './Pages/MainPage/MainPage';
import {AboutPageAsync} from "./Pages/AboutPage/AboutPageAsync";
import {MainPageAsync} from "./Pages/MainPage/MainPageAsync";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;