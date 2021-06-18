import React, { useState } from 'react';
import Card from './Card'
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css'
import styles from './Page.module.scss'
import Harry  from '../Imagenes/Harry.png'
import Isabel  from '../Imagenes/peron.jpg'
import Maestros  from '../Imagenes/maestros.webp'
import Secreto from '../Imagenes/secreto.jpg'
import Socrates  from '../Imagenes/socrates.webp'




function Page(){
    const [state, setState] = useState({
        image: Isabel,
        title:'La primera presidente, Isabel Peron',
        subtitle:'Una mujer en la tormeta',
        paragraph:"Relato de la enigmática vida de María Estela Martínez de Perón, la primera presidente argentina. María Sáenz Quesada revela la historia de la mujer que, a partir de su encuentro con Perón en Panamá, nunca más lo abandonó. Una profunda investigación histórica y multiplicidad de testimonios documentan los años que van desde el exilio, el regreso a la Argentina y el último mandato del General con su mujer como vicepresidente hasta el breve gobierno de `Isabelita` (1974-1976) al frente de un país que estallaba en conflictos, acompañada por emblemas como el mítico José López Rega."
     });

  const api = [{ 
    id:1,
    title: "La primera presidente, Isabel Peron",
    subtitle: "Una mujer en la tormeta",                        
    paragraph: "Relato de la enigmática vida de María Estela Martínez de Perón, la primera presidente argentina. María Sáenz Quesada revela la historia de la mujer que, a partir de su encuentro con Perón en Panamá, nunca más lo abandonó. Una profunda investigación histórica y multiplicidad de testimonios documentan los años que van desde el exilio, el regreso a la Argentina y el último mandato del General con su mujer como vicepresidente hasta el breve gobierno de `Isabelita` (1974-1976) al frente de un país que estallaba en conflictos, acompañada por emblemas como el mítico José López Rega.",
    image: Isabel
},
{   id:2,
    title: "Harry Potter y la Camara secreta",
    subtitle: "La camara de los secretos ha sido abierta, enemigos del heredero temer",                        
    paragraph: "Harry, Ron & Hermione se enfrentaran con peligros inimaginables cuando la camara de los secretos fue abierta liberando todo el mal que en ella habita",
    image: Harry
},
{ 
    id:3,
    title:'Muchas vidas,Muchos Maestros',
    subtitle: "Brian Weis, un exito psicoanalista no puede creer lo que presencia con una paciente muy normal",                        
    paragraph: "La historia real de un psiquiatra, su joven paciente y la terapia de regresión que cambió sus vidas para siempre. Un punto de encuentro entre ciencia y metafísica. El doctor Brian Weiss, jefe de psiquiatría del hospital Mount Sinai de Miami, relata en éste, su primer libro, una asombrosa experiencia que cambió por completo su propia vida y su visión de la psicoterapia",
    image: Maestros
    
},
{ 
    id:4,
    title: 'El Secreto',
    subtitle: "La ley de atraccion ha cambiando muchas vidas",                        
    paragraph: "Un grupo de escritores, filósofos y científicos comparten un secreto milenario, la supuesta razón del éxito de Platón, da Vinci, Einstein y otras grandes mentes.",
    image: Secreto
},{ 
    id:5,
    title: 'La Apologia de Socrates',
    subtitle: "La magnifica defensa de Socrates que lo llevo a la muerte",                        
    paragraph: "Apología de Sócrates es una obra de Platón, que da una versión del discurso que Sócrates pronunció como defensa, ante los tribunales atenienses, en el juicio en el que se le acusó de corromper a la juventud y no creer en los dioses de la polis.",
    image: Socrates
}]
 
 
  const handleOnClick = async (e) =>{
    e.preventDefault()
    api.map((i) => {
    console.log('=====>',e.target.name,i)
    if(i.id == e.target.name){
      return setState({
      ...state, 
      image:[i.image],
      title:[i.title],
      subtitle:[i.subtitle],
      paragraph:[i.paragraph]
     }) 
    }
    }) 
  }

  return (
    <div className={styles.Page}>
    <Header/>
    <Card
      image={state.image}
      title={state.title}
      subtitle={state.subtitle}
      paragraph={state.paragraph}
      /> 
         <div className={styles.Button}>
   <div className="btn-group-vertical" role="group" aria-label="Basic example">
  <button  name='1' onClick={handleOnClick} type="button" className="btn btn-outline-primary">La Primera Presidenta, Isabel Peron</button>
  <button  name='2' onClick={handleOnClick} type="button" className="btn btn-outline-primary">Harry Potter y La Camara Secreta</button>
  <button  name='3' onClick={handleOnClick} type="button" className="btn btn-outline-primary">Muchas Vidas, Muchos Maestros</button>
  <button  name='4' onClick={handleOnClick} type="button" className="btn btn-outline-primary">El Secreto, La Ley de Atraccion</button>
  <button  name='5' onClick={handleOnClick} type="button" className="btn btn-outline-primary">La Apologia de Socrates</button>
    </div>
    </div> 
    </div>
  )  
}

export default Page;