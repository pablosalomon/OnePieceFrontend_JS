import React from "react";

const PersonajesLista = (props) => {
    return(
        <>
        <ul className="collection with-header">
            <li className="collection-header"><h5>Protagonistas</h5></li>
            {
                props.lista.map((elemento) =>{
                    return(
                        <li 
                        className="collection-item" 
                        key={elemento._id}
                        onClick={props.actualizarPersonaje.bind(this, elemento)}
                        >
                            {elemento.nombre}</li>
                    )
                })
            }
            
      </ul>
      </>
    )
}
    
export default PersonajesLista