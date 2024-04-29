import { motion } from 'framer-motion';
import logoMini from '../images/logoMini.png';

export default function Header() {
	return (
	<div className='nav-bar w-50'>
			<div className='flex-row nav-bar-links ibm-plex-sans-regular'>
				<div className='nav-logo' style={{backgroundImage: `url(${logoMini})`}}/>
				<motion.a whileHover={{ scale: 1.2 }} href='#product'>Producto</motion.a>
				<motion.a whileHover={{ scale: 1.2 }} href='#pricing'>Precios</motion.a>
				<motion.a whileHover={{ scale: 1.2 }} href='#us'>Quiénes somos</motion.a>
			</div>
		</div>
	)
}