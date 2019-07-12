import React from "react";
import "./animalcard.css";


const AnimalCard = props => (

    <div className="card col-md-3 col-sm-4">
        <img className="" src={props.image} alt={props.name} onClick={() => props.clickCard(props.name)}

        />

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
export default AnimalCard;