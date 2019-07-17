import React from "./node_modules/react";
import "./header.css";


const Header = props => (
    <div className="header">
        <div className="title">{props.children}</div>
            <div className="scores">
                Current Score: {props.currentScore} Top Score{props.topScore}
            </div>
            </div>
);

export default Header;