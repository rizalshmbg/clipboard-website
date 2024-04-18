import { imgDevices } from '../assets/img'

const Access = () => {
	return (
		<section id='access'>
			<div className='section-container my-20'>
				<h3>Access Clipboard Anywhere</h3>
				<p className='section-content text-xl mb-24'>
					Whether you&#39;re on the go, or at your computer, you can access all
					your Clipboard snippets in a few simple clicks.
				</p>
				<img src={imgDevices} alt='devices' className='mx-auto' />
			</div>
		</section>
	)
}

export default Access
