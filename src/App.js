import React from 'react';

import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Homepage from "./components/Homepage/Homepage"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

class App extends React.Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <Homepage /> 
                <About />
                <Experience />
                <Projects />
                <Contact />
            </div>
        );
    }
}

export default App;