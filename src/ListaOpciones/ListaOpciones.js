import "./ListaOpciones.css"

const ListaOpciones = (props) => {
    //Metodo map para usar array aqui arreglo.map((equipo, index) => {});

            const manejarCambio = (e) => {
                console.log("entrando");
                props.setEquipo(e.target.value);
            }

    return(
        <div className="lista-opciones">
        <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccione un equipo</option>
                //usar {} para usar codigo js en combinacion con html
            {props.equipos.map((equipo, index) => {
                return <option key={index} value={equipo}>{equipo}</option>
            })}
            </select>
        </div>
    )
}

export default ListaOpciones;