import React,{useState} from 'react';


export const SegundoComponente = () => {

//    let nombre = "Antonio";
    let web = "antoniosepdev.github.io";
    let lenguajes =["C#","Java","Python","JavaScript"];
    const [nombre, setnombre] = useState("Antonio");
    const cambiarnombre = (nuevonombre) =>{
        setnombre(nuevonombre);
    }
  return (
    <div>
        <p>
            Mi nombre es: {nombre}
        </p>
        <p> Mi web es: {web}</p>
        <h3>Lenguajes de programación:</h3>
        <button onClick={e=>cambiarnombre("Antonio SepDev")}>Cambiar nombre</button>        
        <ul>
            {lenguajes.map((lenguaje,indice)=>{
                return(<li key={indice}>{lenguaje}</li>)
            })}
        </ul>
    </div>
  )
}
