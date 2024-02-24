import React from 'react';
import Menu from './components/Menu/Menu';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';

function App() {
    const menuPages = [
        {
            image: 'https://source.unsplash.com/400x300/?drinks',
            items: [
                { name: 'Item 1', description: 'Description of Item 1' },
                { name: 'Item 2', description: 'Description of Item 2' },
                // Add more items as needed
            ],
        },
        {
            image: 'https://source.unsplash.com/400x300/?food',
            items: [
                { name: 'Item 3', description: 'Description of Item 3' },
                { name: 'Item 4', description: 'Description of Item 4' },
                // Add more items as needed
            ],
        },
        // Add more pages as needed
    ];

    return (
        <div className="App">
            <Header/>
            <Menu menuPages={menuPages} />
            <Footer/>
        </div>
    );
}

export default App;
