import { motion } from 'framer-motion';
import heroLogo from '../images/hero.png';

export default function Hero() {
	return (
		<div className='flex-row center-items hero-section pt-xl pb-xl'>
			<div className='flex-row hero-wrapper w-50'>
				<div className='flex-column hero-container w-50'>
					<h1 className='ibm-plex-sans-bold'>Automatiza las tareas de tu asesoría</h1>
					<h3 className='ibm-plex-sans-semibold'>Deja que otros se encarguen de las tareas repetitivas y dedica más tiempo a tus clientes. Te ayudamos a mejorar los procesos internos de tu despacho.</h3>
					<div className='flex-row gap-xl ibm-plex-sans-regular'>
						<motion.a whileHover={{ scale: 1.2 }} className='flex-row center-items button button-hero-cta'>Empecemos!</motion.a>
						<motion.a whileHover={{ scale: 1.2 }} className='flex-row center-items button button-hero-go-product'>Saber más →</motion.a>
					</div>
					</div>
				<div className='img-right hero-image' style={{backgroundImage: `url(${heroLogo})`}}/>
			</div>
		</div>
	)
}