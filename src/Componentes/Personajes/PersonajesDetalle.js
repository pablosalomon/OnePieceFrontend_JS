import React from "react";
import axios from "axios";

const PersonajesDetalle = (props) => {

    return(
        <div className="row">
        <div className="col s12 m6">
          <div className="card red darken-4">
            <div className="card-content white-text">
              <span className="card-title">{props.pelsonaje.nombre}</span>
              <p>Años: {props.pelsonaje.años}</p>
              <br/>
              <p>Continente: {props.pelsonaje.isla_continente}</p>
              <br/>
              <p>Personalidad: {props.pelsonaje.personalidad}</p>
              <br/>
              <p>Historia: {props.pelsonaje.historia}</p>
            </div>
            <div className="card-action">
              <a href={props.pelsonaje.imagen}>Ver Imagen</a>
              <form onSubmit={ function (event){
           event.preventDefault();
           axios.delete(`http://localhost:5000/personaje/${props.pelsonaje._id}`)
             .then(response => {
               console.log(response);
               console.log(response.data);
               window.location.reload();
               }) }}>
        <button className="waves-effect purple darken-1 btn">Eliminar</button>
        </form>
            </div>
          </div>
        </div>
      </div>
    )
}
    
export default PersonajesDetalle