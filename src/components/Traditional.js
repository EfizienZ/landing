import { motion } from 'framer-motion';
import tradition from '../images/tradition.png';

export default function Traditional() {
	return(
		<div className='flex-row center-items content-section pt-l pb-l'>
			<div className='flex-row hero-wrapper w-50'>
				<div className='flex-column content-container w-50 ibm-plex-sans-light-italic'>
					<h1 className='ibm-plex-sans-semibold' style={{marginBottom: 30}}>Solución tradicional</h1>
					<p><span className='ibm-plex-sans-semibold'>Jornadas intensivas: </span>Una carga excesiva de trabajo mediante jornadas laborales prolongadas tiene un impacto negativo en la calidad de vida de los empleados.</p>
					<p><span className='ibm-plex-sans-semibold'>Aumento de empleados: </span>Lo que implica una losa de costes insostenibles para ser competitivos.</p>
					<p><span className='ibm-plex-sans-semibold'>Procrastinación: </span>Provocando una deuda técnica que desemboca en incidencias, requerimientos de las autoridades y posibles sanciones.</p>
					<h3 className='ibm-plex-sans-semibold' style={{marginTop: 40, marginBottom: 0}}>Conoce nuestra propuesta</h3>
					<div className='flex-row gap-xl ibm-plex-sans-regular' >
						<motion.a whileHover={{ scale: 1.2 }} className='flex-row center-items button button-light'>Empecemos!</motion.a>
						<motion.a whileHover={{ scale: 1.2 }} className='flex-row center-items button go-button-light'>Saber más →</motion.a>
					</div>
				</div>
				<div className='img-right hero-image' style={{backgroundImage: `url(${tradition})`}}/>
			</div>
		</div>
	)
}