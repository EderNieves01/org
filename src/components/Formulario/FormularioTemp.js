import { useState } from "react";
import { v4 as uuid } from 'uuid';
import ListaOpciones from "../../ListaOpciones/ListaOpciones";
import Boton from "../Boton/Boton";
import Campo from "../Campo/Index"; //podemos usar esta ruta o solo "../Campo"; ya que lo identifica index como principal
import "./Formulario.css"


const Formulario = (props) => {
    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [id, setid] = useState("");

    const [titulo, setTitulo] = useState('');
    const [color, setColor] = useState('');

    const {registrarColaborador, crearEquipo} = props;
    const crearForm = (e) => {
        e.preventDefault();
        console.log("entrando", e);
        let datosAEnviar = {
            //valor y clave es el mismo
            //nombre: nombre
            id,
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar);
        registrarColaborador(datosAEnviar);
    }

    const crearEquipoForm = (e) => {
        e.preventDefault();
        console.log("entrando", e);
        crearEquipo({titulo, colorPrimario: color });
    }

    return (
       <section className="formulario">
        <form onSubmit={crearForm} className="form">
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo
             titulo="Nombre"
              placeholder="Ingresar nombre"
               required
                valor={nombre}
               setValorInput={setNombre}
                />
            <Campo
             titulo="Puesto"
              placeholder="Ingresar puesto"
               required
               valor={puesto}
               setValorInput={setPuesto}
               />
            <Campo
             titulo="Foto"
              placeholder="Ingresar foto"
               required
               valor={foto}
               setValorInput={setFoto}
               />
            <ListaOpciones equipos={props.arrEquipos} valor={equipo} setEquipo={setEquipo}/>
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={crearEquipoForm} className="form">
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo
             titulo="Titulo"
              placeholder="Ingresar Titulo"
               required
                valor={titulo}
               setValorInput={setTitulo}
                />
            <Campo
             titulo="Color"
              placeholder="Ingresar el color en hex"
               required
               valor={color}
               setValorInput={setColor}
               type="color"
               />
               <Boton texto="Registar Equipo"/>
        </form>
       </section>
    )
}

export default Formulario;