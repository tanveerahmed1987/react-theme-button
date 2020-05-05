import React from 'react';
import './Button.css';

function Button({ children, theme }) {
    return (
        <div>
            <button className={`btn ${theme === 'dark' ? "dark" : "light"}`}>
                {children}
            </button>
        </div>
    )
}

export default Button;
