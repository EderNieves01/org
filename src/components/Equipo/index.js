import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba'; //usar para cambiar color y opacidad
import "./Equipo.css"

const Equipo = (props) => { // Destructuracion
    const {titulo, colorPrimario, colorSecundario, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;

    return <> {
        colaboradores.length > 0 && <section className="equipo"
            style={
                {backgroundColor: hexToRgba(colorPrimario, 0.6) }
        }>
            <input type="color" className="input-color"
                value={colorPrimario}
                onChange={
                    (event) => { // colorSecundario = event.target.value;
                        actualizarColor(event.target.value, id);
                    }
                }/>
            <h3 style={
                {borderColor: colorPrimario}
            }>
                {titulo}</h3>
            <div className="colaboradores">
                {
                colaboradores.map((colaborador, index) => {
                    return <Colaborador key={index}
                        datos={colaborador}
                        colorPrimario={colorPrimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}/>
                })
            } </div>
        </section>
    } </> // fragment
}

export default Equipo;
