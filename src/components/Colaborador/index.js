import "./Colaborador.css"
import { IoCloseCircle,} from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";


const Colaborador = (props) => {
    const {nombre, puesto, foto, equipo, id, fav} = props.datos;
    const {colorPrimario, eliminarColaborador, like} = props;
    return (
        
        <div className="colaborador">
            <span onClick={ () => eliminarColaborador(id) } > <IoCloseCircle className="eliminar"/> </span>
            <div className="encabezado" style={ {backgroundColor: colorPrimario} }>
            <img src={foto} alt={nombre} />
            </div>
            <div className="info">
             <h4>{nombre}</h4>
             <h5>{puesto}</h5>
             <h5>{equipo}</h5>
             {fav === true ? <IoMdHeart color="red" onClick={()=>{like(id)}}/> : <CiHeart onClick={()=>{like(id)}}/>}
             
             
            </div>
        </div>
    )
}

export default Colaborador;