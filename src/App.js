import React from 'react';
import styles from './App.module.css';
import Header from './Components/Header/Header';
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/Skills";
import Slogan from "./Components/Slogan/Slogan";
import Projects from "./Components/Projects/Projects";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";
import Particles from 'react-particles-js';


const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: '#ff4500'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 3,
                color: '#ff4500'
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.3,
            width: 1
        }
    }
}

const App = () => {
    return (
        <div className={styles.app}>
                <Particles className={styles.particles} params={particlesOptions}/>
                <Header/>
                <Main/>
                <Skills/>
                <Projects/>
                <Slogan/>
                <Contacts/>
                <Footer/>
        </div>
    );
}

export default App;
