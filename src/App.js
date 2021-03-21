import './App.css';
import Formulario from './components/Form';
import Form from './components/Cita';
import React, { Fragment, useState } from 'react';

function App() {

  const [citas, guardarCita] = useState([]);

  const crearCita = cita => {
    guardarCita([
      ...citas,
      cita]);

    console.log(citas);
  }


  return (
    <Fragment>

      <h1>Administrador de pacientes</h1>
      
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita =>(
              <Cita
               />
            ))}
          </div>
        </div>

       
      </div>
     
    </Fragment>
  );
}

export default App;
