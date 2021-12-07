import React from "react";
import axios from "axios";

class PersonajesForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }


    submitNuevoPersonaje(event){
        event.preventDefault();
        //hacer la petición via axios
        axios.post('http://localhost:5000/personaje',{
            nombre: this.refs.nombre.value,
            años: this.refs.años.value,
            isla_continente: this.refs.isla_continente.value,
            personalidad: this.refs.personalidad.value,
            historia: this.refs.historia.value,
            imagen: this.refs.imagen.value,
        }).then((respuesta)=>console.log(respuesta.data))
        .catch(error=>console.log(error))
        window.location.reload();
    }



    render(){
        return(
<div className="row">
    <h3 className="center">Nuevo Personaje</h3>
    <form className="col s12"  onSubmit={this.submitNuevoPersonaje.bind(this)}>
      <div className="row">
        <div className="input-field col s6">
          <input id="nombre" ref="nombre" type="text"/>
          <label htmlFor="nombre">Nombre</label>
        </div>
        <div className="input-field col s6">
          <input id="años" ref="años" type="number"/>
          <label htmlFor="años">Años</label>
        </div>
        <div className="input-field col s6">
          <input id="isla_continente" ref="isla_continente" type="text"/>
          <label htmlFor="isla_continente">Continente</label>
        </div>
        <div className="input-field col s6">
          <input id="personalidad" ref="personalidad" type="text"/>
          <label htmlFor="personalidad">Personalidad</label>
        </div>
        <div className="input-field col s6">
          <input id="historia" ref="historia" type="text"/>
          <label htmlFor="historia">Historia</label>
        </div>
        <div className="input-field col s6">
          <input id="imagen" ref="imagen" type="text"/>
          <label htmlFor="imagen">Imagen</label>
        </div>
        <div className="input-field col s6">
            <button className="waves-effect waves-light btn center" type="submit" name="action">Registrar</button>
        </div>
      </div>
    </form>
  </div>
           )
    }
}

export default PersonajesForm