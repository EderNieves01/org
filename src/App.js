// import logo from './logo.svg';
import {useState} from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/Formulario/FormularioTemp';
import MiOrg from './components/MiOrg/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() { // Estado - Hook
    const [mostrarForm, setMostrarForm] = useState(false);

    // registrar colabrorador
    const [colaboradores, setColaboradores] = useState([
        {
          id: uuid(),
            equipo: "Front End",
            foto: "https://github.com/harlandlohora.png",
            nombre: "Harland Lohora",
            puesto: "Instructor",
            fav: true,
        },
        {
          id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/genesysaluralatam.png",
            nombre: "Genesys Rondón",
            puesto: "Desarrolladora de software e instructora",
            fav: false,
        },
        {
          id: uuid(),
            equipo: "UX y Diseño",
            foto: "https://github.com/JeanmarieAluraLatam.png",
            nombre: "Jeanmarie Quijada",
            puesto: "Instructora en Alura Latam",
            fav: false,
        },
        {
          id: uuid(),
            equipo: "Programación",
            foto: "https://github.com/christianpva.png",
            nombre: "Christian Velasco",
            puesto: "Head de Alura e Instructor",
            fav: false,
        }, 
        {
          id: uuid(),
            equipo: "Innovación y Gestión",
            foto: "https://github.com/JoseDarioGonzalezCha.png",
            nombre: "Jose Gonzalez",
            puesto: "Dev FullStack",
            fav: false,
        }
    ]);
    
    const [equipos, setEquipos] = useState( // Lista de equipos
      [
        {
          id: uuid(),
            titulo: 'Programacion',
            colorPrimario: '#57C278',
            colorSecundario: '#D9F7E9'
        },
        {
          id: uuid(),
            titulo: 'Diseño',
            colorPrimario: '#DB6EBF',
            colorSecundario: '#FAE9F5'
        },
        {
          id: uuid(),
            titulo: 'Movil',
            colorPrimario: '#FFBA05',
            colorSecundario: '#FFF5D9'
        },
        {
          id: uuid(),
            titulo: 'Innovacion y Gestion',
            colorPrimario: '#FF8A29',
            colorSecundario: '#FFEEDF'
        }, 
        {
          id: uuid(),
            titulo: 'Front End',
            colorPrimario: '#82CFFA',
            colorSecundario: '#E8F8FF'
        }, 
        {
          id: uuid(),
            titulo: 'Data Science',
            colorPrimario: '#A6D157',
            colorSecundario: '#F0F8E2'
        }, 
        {
          id: uuid(),
            titulo: 'Back End',
            colorPrimario: '#E06B69',
            colorSecundario: '#FDE7E8'
        }
    ]
)

    const cambiarMostrar = () => {
        setMostrarForm(!mostrarForm);
    }
    const registrarColaborador = (colaborador) => {
        setColaboradores([
            ...colaboradores,
            colaborador
        ]);
    }
    // Eliminar colaborador
    const eliminarColaborador = (id) => {
        console.log("Eliminar colaborador", id)
        const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id
        )
        setColaboradores(nuevosColaboradores)
    }
    // Actualizar color
    const actualizarColor = (color, id) => {
        const equiposActualizados = equipos.map((equipo)=>{
          if(equipo.id === id){
            equipo.colorPrimario = color;
          }
          return equipo;

        })

        setEquipos(equiposActualizados);

    }

    //Crear equipo
    const crearEquipo = (equipo) => {
        setEquipos([
           ...equipos,
            {...equipo, id: uuid()}
        ]);
        console.log(equipo)
    }
  
    const like = (id) =>{
      
      const colaboradoresActualizados = colaboradores.map((colaborador)=>{
        if(colaborador.id === id){
          colaborador.fav =! colaborador.fav;
        }
        return colaborador;
      });
      setColaboradores(colaboradoresActualizados);
    }
    // Eliminar equipo
    const eliminarEquipo = (id) => {
        const equiposActualizados = equipos.filter((equipo) => equipo.id!= id
        )
        setEquipos(equiposActualizados);
    }

    // Actualizar equipo
    const actualizarEquipo = (titulo, colorPrimario, colorSecundario, id) => {
        const equiposActualizados = equipos.map((equipo)=>{
          if(equipo.id === id){
            equipo.titulo = titulo;
            equipo.colorPrimario = colorPrimario;
            equipo.colorSecundario = colorSecundario;
          }
          return equipo;

        })

        setEquipos(equiposActualizados);

    }

    // ternario --> condicion ? seMuestra : noSeMuestra;
    return (
        <div>
            <Header/> {/* {mostrarForm === true ? <Formulario />  : null} */}
            {/* //corto circuito con condicion operador anpersan condicion && seMuestra */}
            {
            mostrarForm && <Formulario arrEquipos={
                    equipos.map((equipo) => equipo.titulo)
                }
                registrarColaborador={registrarColaborador}
                eliminarColaborador={eliminarColaborador}
                crearEquipo={crearEquipo}/>
        }

            <MiOrg cambiarMostrar={cambiarMostrar}/> {
            equipos.map((equipo) => {
                return <Equipo key={
                        equipo.titulo
                    }
                    datos={equipo}
                    colaboradores={
                        colaboradores.filter((colaborador) => colaborador.equipo === equipo.titulo)
                    }
                    eliminarColaborador={eliminarColaborador}
                    actualizarColor={actualizarColor}
                    like={like}
                    />
                    
            })
        }
            <Footer/>
        </div>
    );
}

export default App;
