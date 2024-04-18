import BtnLink from './btn/BtnLink'

const BtnContainerHero = () => {
	return (
		<div className='flex flex-col justify-center w-full space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4'>
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
