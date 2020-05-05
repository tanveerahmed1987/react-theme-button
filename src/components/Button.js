import React, { useContext } from 'react';
import './Button.css';
import { ThemeContext } from '../context/ThemeContext';

function Button({ children }) {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button className={`btn ${theme === 'dark' ? "dark" : "light"}`}>
                {children}
            </button>
        </div>
    )
}

export default Button;
