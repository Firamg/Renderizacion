import React,{useState} from 'react'

//Bases de Datos

import BaseColaboradores from '../bases/BaseColaboradores'

//Componentes

import FormColaboradores from '../components/FormColaboradores'

import Search from '../components/Search'

import ListaColaboradores from '../components/ListaColaboradores'


function PagesTareas() {



    const [colaboradores, setColaboradores] = useState(BaseColaboradores)


    //Funcion Agregar Colaborador

    const agregarColaborador=(colaborador)=>
    {
        if(!colaborador){
            return
        }
        setColaboradores=([...colaboradores,colaborador])
    }


 
    return (
        <>
            {/* Buscador */}
            {/* <Search/> */}

           {/*  <hr /> */}
            {/* <p>Agregar</p> */}


            {/* Agregar Tarea */}

            
            


           {/*  <hr />
             */}

            {/* Lista Para Mostrar */}

         

            {/* <ul>
                {colaboradores.map(colaborador => <li key={colaborador.id}>{colaborador.nombre} - {colaborador.correo}</li>)}
            </ul>


 */}

    <ListaColaboradores/>
            


        </>

    )
}

export default PagesTareas