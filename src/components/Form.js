import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function Form({crearCita}) {

    // Crear State de Citas

    const [cita, actualizarCita] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''

    });

    const [ error, actualizarError ] = useState(false);

    const UpdateState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value})
    
    }

    const {pet, owner, date, hour, symptoms} = cita;

    const submitCita = e => {
        e.preventDefault();
        if (pet.trim() === '' || owner.trim() === '' || date.trim() === '' ||
         hour.trim() === '' ||  symptoms.trim() === '') {
            actualizarError(true);
            return;
        }
        actualizarError(false);
        cita.id = uuidv4();
        crearCita(cita);

        actualizarCita({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        });
    }

    



    
    return (
        <Fragment>

            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={UpdateState}
                    value={pet}/>

                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre Duenio"
                    onChange={UpdateState}
                    value={owner} />

                <label>Fecha</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={UpdateState}
                    value={date}
                 />

                <label>Hora</label>
                <input
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={UpdateState}
                    value={hour}

                 />

                 <textarea 
                    onChange={UpdateState}
                    name="symptoms" 
                    className="u-full-width"
                    value={symptoms}></textarea>
                 <input
                    type="submit"
                    className="u-full-width"                    
                />
            </form>



        </Fragment>
    )
}



export default Form;