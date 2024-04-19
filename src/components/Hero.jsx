import { logo } from '../assets/svg'
import BtnContainerHero from './BtnContainerHero'

const Hero = () => {
	return (
		<section
			id='hero'
			className='bg-[url("/src/assets/img/bg-header-desktop.png")] bg-no-repeat bg-contain'
		>
			<div className='section-container mb-40 pt-16'>
				<img
					src={logo}
					alt='logo icon of clipboard'
					className='mx-auto my-16'
					id='logo-1'
				/>
				<h3 id='title-1'>A history of everything you copy</h3>
				<p id='title-2' className='section-content mb-10 text-2xl'>
					Clipboard allows you to track and organize everything you copy.
					Instantly access your clipboard on all your devices.
				</p>
				<BtnContainerHero />
			</div>
		</section>
	)
}

export default Hero
