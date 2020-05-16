import React from "react";
import "./style.css";

function SearchContainer(props) {
    return (
        <div>
          
          <ul className="bullets">
              <li>
              <img alt={props.name} src={props.picture}/>
              </li>
              <li>
              {props.first} {props.last}
              </li>
              <li>
              {props.phone}
              </li>
              <li>
              {props.email}
              </li>
          </ul>
        </div>
      );
}

export default SearchContainer;


// return (
//     <div className="card">
//       <div className="img-container">
//         <img alt={props.name} src={props.Picture}/>
//       </div>
//       <div className="content">
//         <ul>
//           <li>
//             <strong>Name:</strong> {props.first} {props.last}
//           </li>
//           <li>
//             <strong>Phone:</strong> {props.Phone}
//           </li>
//           <li>
//             <strong>Email:</strong> {props.Email}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );