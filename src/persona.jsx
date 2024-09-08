function Persona(props) {
    console.log(props);
    return (
      <div className="persona">
        <h3>Nombre: {props.nombre} </h3>
        <p>Apellido: {props.apellido} </p>
      </div>
   
    );
  }
  export default Persona;  