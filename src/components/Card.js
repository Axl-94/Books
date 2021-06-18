import 'bootstrap/dist/css/bootstrap.css'
import styles from './Card.module.scss'


function Card({image,title,subtitle,paragraph}){




return (
    <div  class={styles.Card} >
    <div className="card" style={{backgroundColor:'transparent'}} />
    <div class={styles.Marco}>
  <img className="card-img-top" src={image} alt="Card image cap" style={{backgroundColor:'transparent',right:'10rem'}}/>
   </div>
  <div className="card-body" style={{width:'55rem',backgroundColor:'transparent'}}>
    <h3 className="card-title"><b>{title}</b></h3>
    <h5 className="card-title">{subtitle}</h5>
    <p className="card-text" >{paragraph}</p>
  
  </div>
</div>
);
}

export default Card ;