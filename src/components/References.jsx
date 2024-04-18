import {
	logoGoogle,
	logoHP,
	logoIBM,
	logoMicrosoft,
	logoVectorGraphics,
} from '../assets/img'

const References = () => {
	return (
		<section id='references'>
			<div className='flex flex-col items-center justify-between max-w-6xl px-10 mx-auto space-y-16 my-44 md:flex-row md:space-y-0'>
				<img src={logoGoogle} alt='Google logo' />
				<img src={logoHP} alt='HP logo' />
				<img src={logoIBM} alt='IBM logo' />
				<img src={logoMicrosoft} alt='Microsoft logo' />
				<img src={logoVectorGraphics} alt='Vector Graphics logo' />
			</div>
		</section>
	)
}

export default References
