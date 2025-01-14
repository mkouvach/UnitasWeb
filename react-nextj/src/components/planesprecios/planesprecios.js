import 'bootstrap/dist/css/bootstrap.css';
import styles from './style.css'

export default function PlanesPrecios(props) {
  return (

    <div>



      {/* <h1>Precios 2</h1> */}

      <div className="pricing-container">
        <h1> {props.nombre}</h1>

        <header>
          <h1>Elegí tu plan</h1>
          <p>Desbloqueá la experiencia Unitas</p>
        </header>

        <div className="plans">
          
          <div className="plan">
            <h2>Básico</h2>
            <p>El plan adecuado si estás comenzando en el mundo de las redes sociales.</p>
            <h3>$300.000</h3>
            <button>Contratar ahora</button>
            <ul>
              <li>✔ Idóneo para primeros pasos</li>
            </ul>
          </div>
          
          <div className="plan">
            <h2>Premium</h2>
            <p>Un plan equilibrado y completo que transformará tu presencia en las redes.</p>
            <h3>$500.000</h3>
            <button>Contratar ahora</button>
            <ul>
              <li>✔ Impulsa tu marca</li>
              <li>✔ Aumenta el contenido</li>
            </ul>
          </div>
          
          <div className="plan">
            <h2>Meraki</h2>
            <p>El plan perfecto para si querés exprimir al máximo sus posibilidades.</p>
            <h3>$700.000</h3>
            <button>Contratar ahora</button>
            <ul>
              <li>✔ Más conexión con la audiencia</li>
              <li>✔ Mayor posicionamiento</li>
              <li>✔ Contenido diario</li>
            </ul>
          </div>
        
          <div className="plan">
            <h2>Unitas</h2>
            <p>Ideal para empresas que quieran generar un alto impacto con un servicio completo.</p>
            <h3>Personalizado</h3>
            <button>Consultar precio</button>
            <ul>
              <li>✔ Evolución de la marca</li>
              <li>✔ Consolidación en redes</li>
              <li>✔ Ediciones de alto nivel</li>
              <li>✔ Calidad exclusiva</li>
            </ul>
          </div>
        
        </div>

      </div>


    </div>
  );

}