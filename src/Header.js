import React from "react";
import './Header.css';

const headerStyle = {
    textAlign: 'center',
    padding: 20,
    background: '#000',
    color: '#fff',
    textTransform: 'uppercase'
};
const Header = function (props) {
    return (
        <div className="header">
            {props.headingName}
        </div>
    )
};
export default Header