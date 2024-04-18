import { logo } from '../assets/svg'
import ItemsContainerFooter from './ItemsContainerFooter'

const Footer = () => {
	return (
		<footer id='footer' className='bg-gray-50'>
			<div className='section-container'>
				<div className='flex flex-col items-center justify-between md:flex-row'>
					<img src={logo} alt='logo icon' className='scale-50' />
					<ItemsContainerFooter />
				</div>
			</div>
		</footer>
	)
}

export default Footer
