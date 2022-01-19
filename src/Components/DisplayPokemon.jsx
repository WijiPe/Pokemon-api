import React, {useState} from "react";

const DisplayPokemon = (props) => {
   

    return (
        <div>
            <ul>
                    {props.pokemon.map((item, i) => {
                        return ( <li key ={i}>{item.name}</li>
                            
                        )
                    } 
                    )}
                
            </ul>
            
        </div>
    )

}

export default DisplayPokemon;