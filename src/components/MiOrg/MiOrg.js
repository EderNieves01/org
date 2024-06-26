import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - Hook
    //useState()
    // const [nombrevariable, funcionActualizar] = useState('Valor inicial');
    //const [nombre, nombreState] = useState('Eder Nieves');
    
    // const [mostrar, mostrarState] = useState(true);

    // const manejarClick = () => {
    //     console.log("click", !mostrar);
    //     mostrarState(!mostrar);
    // }
    return (
        <div>
            <section className="orgSection">
            <h3 className="title">Mi organizacion</h3>
            <img onClick={props.cambiarMostrar} src="/img/add.png" alt="add"/>
            </section>
        </div>
    )
}

export default MiOrg;