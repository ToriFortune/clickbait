import React from "react";
import "./navbar.css";


const Navbar = props => (
    <nav className="navbar">
        <div className="row">
            <div className="col-sm">
                Current Score: {props.currentScore} 
            </div>
            <div className="col-sm">
               Underwater Creatures
            </div>
            <div className="col-sm">
                Top Score: {props.topScore}
            </div>
        </div>
    </nav>
);

export default Navbar;