import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;