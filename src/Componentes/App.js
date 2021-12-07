import React from 'react';
import axios from 'axios';
import './App.css';
import PersonajesLista from './Personajes/PersonajesLista';
import PersonajesDetalle from './Personajes/PersonajesDetalle';
import PersonajesForm from './Personajes/PersonajesForm';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      personaje: [],
      personajeActual: {}
    }

    this.actualizarPersonaje = this.actualizarPersonaje.bind(this)
  }

componentDidMount(){
  const url = 'http://localhost:5000/personaje'
  axios.get (url)
  .then( (respuesta)=> {
      this.setState({
        personaje: respuesta.data
      })
      this.setState({
        personajeActual: respuesta.data[0]
      })
  })
  .catch( (error)=> {console.log(error)} )
}

actualizarPersonaje(personaje){
  this.setState({
    personajeActual:personaje
  })
}


  render (){
    return (
      <div className="center-align">
      <div className="container-fluid">
        <div className="row">
          <div className="col s12">
          <nav>
          <div className="nav-wrapper red darken-4">
            <a href="#!" className="brand-logo center">One Piece Personajes</a>
          </div>
        </nav>
          </div>
        </div>
        <div className="row">
        <div className="col s3"><PersonajesLista lista={this.state.personaje} numero={1} actualizarPersonaje={this.actualizarPersonaje}/></div>
        <div className="col s9"><PersonajesDetalle pelsonaje={this.state.personajeActual}/></div>
      </div>
      <div className="row">
        <div className="col s12">
        <PersonajesForm/>
        </div>
      </div>
      </div>
      </div>
    );
  }
  
}

export default App;
