import React from "react";
import "./card.css";


const Card = props => (

    <div className="card col-md-3 col-sm-4" onClick={() => props.clickCOunt(props.id)}>
        <div className="img-container">
            <img src={props.image} alt={props.name} />
        </div>
    </div>
);
// return (
//     <div className="card">
//         <div className="img-container">
//             <img alt={props.name} src={props.image} />

//         </div>
//     </div>
// )
//     import React from "react";
// import "./style.css";
// function AnimalCard(props) {
//     return (
//         <div className="card">
//             <div className="img-container">
//                 <img alt={props.name} src={props.image} />

//             </div>
//         </div>
//     )
// }
// //  To do: review activity 29 of class exercise, replicate other components to match activity. review and confirm imports.
export default Card;