import React from "react";
import "./style.css";
function AnimalCard (props){
    return(
        <div className = "card">
            <div className = "img-container">
                <img alt = {props.name} src = {props.image}/>

        </div>
        </div>
    )
}
//  To do: review activity 29 of class exercise, replicate other components to match activity. review and confirm imports.
export default AnimalCard;