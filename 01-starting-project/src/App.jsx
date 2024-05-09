import reactImg from './assets/react-core-concepts.png';
import componentImg from './assets/components.png';

import {useState, Fragment} from "react";

import {CORE_CONCEPTS}   from "./data.js";
import {EXAMPLES}   from "./data";
import Header from './components/Header/Header.jsx';
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

import Examples from "./components/Examples";



function App() {


    return (
        <>
            <Header />
            <main>
                <CoreConcepts/>
                <Examples/>
            </main>
        </>
    );
}

export default App;