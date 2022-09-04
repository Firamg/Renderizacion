import React, { useState } from 'react'
/* import BaseColaboradores from '../bases/BaseColaboradores' */

function FormColaboradores(props) {

    //Función Colaboradores
    //Nombre
    const [nombreColaborador, setNombreColaborador] = useState('')
    //Correo
    const [correoColaborador, setCorreoColaborador] = useState('')

   /*   const [listaColaborador, setListaColaborador] = useState(BaseColaboradores) */

    //Fución enviar Formulario

    const enviarFormulario = (e) => {
        e.preventDefault()
        setNombreColaborador('')
        setCorreoColaborador('')


        props.nombre.agregarColaborador(nombreColaborador)
        props.correo.agregarColaborador(correoColaborador)


        //Agregar Colaborador

        //Agregar Correo




        setListaColaborador([...listaColaborador, {
            nombre: nombreColaborador,
            correo: correoColaborador, 
            id:{id}
        }])

    }

    const capturarInputNombre = (e) => {
        setNombreColaborador(e.target.value)
    }

    const capturarInputEmail = (e) => {
        setCorreoColaborador(e.target.value)
    }



    return (

        <div className='m-auto'>

            <form onSubmit={enviarFormulario}>

                {/* Input Nombre */}

                <input
                    name='nombreColaborador'
                    onChange={capturarInputNombre}
                    value={nombreColaborador}

                />

                {/*    Input Correo */}
                <input
                    name='emailColaborador'
                    onChange={capturarInputEmail}
                    value={correoColaborador}
                />


                <button >ADD!</button>



            </form>
        </div>


    )
}

export default FormColaboradores