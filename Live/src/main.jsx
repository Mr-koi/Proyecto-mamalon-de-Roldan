//agregar eeentos que nos permite renderisar 
import React from "react";
import ReactDOM from 'react-dom/client';
import { HolaMundo } from "./HolaMundo";
import { RFC_calculador} from "./RFC";
import './style.css';

//funcion basada en componente 

/*const App =()=>{

    return(<h1>Hola mundo </h1>)
}*/

//ahora renderizamos



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        < RFC_calculador nombre="Jose" Fecha_Nacimiento="15-09-2002" paterno="Ortega" materno="Arreola" titulo="hola"/>
    </React.StrictMode>
);

