import React from 'react';
import './Toolbar.css';
import Button from './Button';

function Toolbar({ theme }) {
    return (

        <div className="topnav">
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div className="right-container">
                <Button theme={theme}>Register</Button>
            </div>
        </div>
    )
}

export default Toolbar;
