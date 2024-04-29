import Percentage from './percentage';

export default function Study() {
	return(
		<div className='flex-row center-items content-section pt-l pb-l'>
			<div className='flex-row center-items content-wrapper w-40'>
				<div className='flex-column content-container'>
					<h1 className='ibm-plex-sans-semibold'>Según un estudio de McKinsey, los asesores y gestores dedican el 86% de su tiempo a labores automatizables.</h1>
					<h3 className='ibm-plex-sans-regular-italic'>El trabajo del asesor está lleno de tareas repetitivas que pueden ser mecanizadas o automatizadas en la era digital. El asesor puede optimizar estas tareas descomponiéndolas, sustituyéndolas o eliminándolas.</h3>
				</div>
				<Percentage/>
			</div>
		</div>
	)
}