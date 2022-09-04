

import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

import BaseColaboradores from '../bases/BaseColaboradores'

function ListaColaboradores() {
  

  //Función Colaboradores
  //Nombre
  const [nombreColaborador, setNombreColaborador] = useState('')
  //Correo
  const [correoColaborador, setCorreoColaborador] = useState('')

  //Lista de Colaboradores

  const [listaColaborador, setListaColaborador] = useState(BaseColaboradores)

  //Search

  const [search, setSearch] = useState("");



  //Fución enviar Formulario

  const enviarFormulario =(e,id)=>{
    e.preventDefault()
    const idMapping = Number(listaColaborador[listaColaborador.length - 1].id) + 1;
    
    setListaColaborador([...listaColaborador,{nombre:nombreColaborador,
    correo:correoColaborador,id:idMapping.toString()}])

    setNombreColaborador('')
    setCorreoColaborador('')
    
  }

  const capturarInputNombre =(e)=>{
    setNombreColaborador(e.target.value)
  }

  const capturarInputEmail =(e)=>{
    
    setCorreoColaborador(e.target.value)
  }

  const buscadorListaTareas=(e)=>{
    setSearch(e.target.value)

  }

  const listado = !search
    ? listaColaborador
    : listaColaborador.filter((x) => (x.nombre.toLowerCase().includes(search.toLocaleLowerCase())||x.correo.toLowerCase().includes(search.toLocaleLowerCase())
    ));




  return (
    <div className='bg-pink-200 h-screen'>
      <div className='text-center p-10 bg-pink-400'>

        <input onChange={(e)=>buscadorListaTareas(e)}
        value={search}
        className='bg-white px-3 gap-3 rounded-md mx-3'
        placeholder='Insert name or email'
        />
        <button 
        className="bg-indigo-400 border-b-black text-white p-1 px-4 rounded-md font-bold ml-3 hover:bg-pink-500" 
        >Search</button>

      </div>

      <form onSubmit={enviarFormulario}
      className='gap-2 p-2 text-center mt-6'>

        {/* Input Nombre */}

        <input
        className='bg-white-100 px-3 gap-3 rounded-md'
          name='nombreColaborador'
          onChange={capturarInputNombre}
          value={nombreColaborador}
          placeholder='Insert Name'

        />

        {/*    Input Correo */}
        <input
          className='bg-white-100 px-3 gap-3 rounded-md mx-3'
          name='emailColaborador'
          onChange={capturarInputEmail}
          value={correoColaborador}
          placeholder='Insert email'
        />


        <button className="bg-green-500 p-1 px-4 rounded-md font-bold ml-3 hover:bg-pink-500 text-white" >ADD!</button>



      </form>


      <h3 className='text-xl font-bold capitalize p-4 text-center bg-green-600 text-white m-6 rounded-lg hover:bg-pink-500'>Lista de Colaboradores:</h3>

      <ul
      className='bg-green-300  text-black gap-2 p-2 text-center rounded-md m-5'>
        {listado.map(colaborador => <li
        className='bg-pink-100 mx-1 mt-1 mb-1 p-1 hover:bg-pink-500 text-left pl-10' key={colaborador.id}
        >{colaborador.nombre} - {colaborador.correo}</li>)}
      </ul>


    </div>
  )
}

export default ListaColaboradores
