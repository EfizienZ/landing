import solutionLogo from '../images/solution.png';

export default function Benefits() {
  return(
    <div className='flex-row center-items hero-section pb-l'>
      <div className='flex-row hero-wrapper w-50'>
        <div className='flex-column hero-container w-50 ibm-plex-sans-light-italic'>
          <h1 className='ibm-plex-sans-semibold ' style={{marginBottom: 30}}>Beneficios</h1>
          <p><span className='ibm-plex-sans-semibold'>Reducción de costes: </span>Gracias al RPA, las tareas se distribuyen eficientemente, reduciendo los costos de procesamiento hasta un 80%.</p>
          <p><span className='ibm-plex-sans-semibold'>Precisión y calidad: </span>Los robots siguen estándares y reglas estrictos, garantizando que cada proceso cumpla con tus requisitos de calidad y seguridad generando gran cantidad de datos libres de errores manuales.</p>
          <p><span className='ibm-plex-sans-semibold'>Productividad: </span>Las soluciones RPA aumentan la productividad al ejecutar tareas continuas, eliminar actividades innecesarias y optimizar el tiempo de los colaboradores.</p>
        </div>
        <div className='img-right hero-image' style={{backgroundImage: `url(${solutionLogo})`}}/>
      </div>
    </div>
  )
}