import { imgDevices } from '../assets/img'

const Access = () => {
	return (
		<section id='access'>
			<div className='section-container my-20'>
				<h3>Access Clipboard Anywhere</h3>
				<p className='max-w-3xl mx-auto mb-24 text-xl leading-6 text-center text-grayishBlue'>
					Whether you’re on the go, or at your computer, you can access all your
					Clipboard snippets in a few simple clicks.
				</p>
				<img src={imgDevices} alt='devices' className='mx-auto' />
			</div>
		</section>
	)
}

export default Access
