import { useState } from "react";
import "./Campo.css"

const Campo = (props) => {
  const [valorInput, setValorInput] = useState("");
 
  const {type = 'text'} = props;
 
  const manejarCambio = (e) => {
    props.setValorInput(e.target.value)
  }

    return (
        <div className={`campo campo-${type}`}>
            <label>{props.titulo}</label>
            <input 
             placeholder={props.placeholder}
              required={props.required}
              onChange={manejarCambio}
              value={props.valorInput}
              type={type}
              />
              
        </div>
    )
}

export default Campo;