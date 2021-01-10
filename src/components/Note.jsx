
import React from "react";
import {ImBin} from "react-icons/im"

function Note(props){

    function handleClickdel() {
        props.onDelete(props.id);

      }
    
    return (
     <div className="note">
        <h1> {props.title} </h1> 
        <p> {props.content} </p>
        <button onClick={handleClickdel}> <ImBin className="bin" size={18} /> </button>
     </div>
    );
} 

export default Note;
