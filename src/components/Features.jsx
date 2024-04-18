import { imgComputer } from '../assets/img'
import ItemsContainerFeatures from './ItemsContainerFeatures'

const Features = () => {
	return (
		<section id='features'>
			<div className='section-container my-20'>
				<div className='relative flex flex-col md:flex-row md:space-x-32'>
					<div className='md:w-1/2'>
						<img
							src={imgComputer}
							alt='computer desktop'
							className='md:absolute top-0 right-[50%]'
						/>
					</div>

					<ItemsContainerFeatures />
				</div>
			</div>
		</section>
	)
}

export default Features
