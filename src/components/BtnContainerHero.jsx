import BtnLink from './btn/BtnLink'

const BtnContainerHero = () => {
	return (
		<div className='btn-container'>
			<BtnLink
				href={'#'}
				className={
					'p-4 px-8 rounded-full shadow-lg bg-strongCyan duration-200 hover:opacity-80'
				}
				text={'Download for iOS'}
			/>
			<BtnLink
				href={'#'}
				className={
					'p-4 px-8 rounded-full shadow-lg bg-lightBlue duration-200 hover:opacity-80'
				}
				text={'Download for Mac'}
			/>
		</div>
	)
}

export default BtnContainerHero
