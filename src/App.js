import React from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {

    return (
        <div className="App">
            <Header/>
            <Menu />
            <Footer/>
        </div>
    );
}

export default App;
