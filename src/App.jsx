import { useState } from 'react'
import './App.css'
import Persona from './persona';


function App(){
  return(
    <div className="App">
      <h1>Bienvenido!</h1>
      <Persona nombre="Raul" apellido="fuandeer" />
    </div>
  )
}
export default App;
