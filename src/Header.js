import React from "react";
import './Header.css';

const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
};
const Header = function () {
    return (
        <div className="header">
            Phone Directory
        </div>
    )
};
export default Header