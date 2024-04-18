import { iconFacebook, iconInstagram, iconTwitter } from '../assets/svg'
import BtnLink from './btn/BtnLink'

const ItemsContainerFooter = () => {
	return (
		<div className='flex flex-col items-center justify-between flex-1 mb-10 space-y-6 md:flex-row md:mb-0 md:space-y-0 text-grayishBlue'>
			<div className='flex flex-col space-y-4 md:flex-row md:ml-24 md:space-x-24 md:space-y-0'>
				{/* MENU-1 */}
				<div className='flex flex-col space-y-4 text-center md:text-left'>
					<div>
						<BtnLink
							href={'#'}
							className={'hover:text-strongCyan'}
							text={'FAQs'}
						/>
					</div>
					<div>
						<BtnLink
							href={'#'}
							className={'hover:text-strongCyan'}
							text={'Contact Us'}
						/>
					</div>
				</div>

				{/* MENU-2 */}
				<div className='flex flex-col space-y-4 text-center md:text-left'>
					<div>
						<BtnLink
							href={'#'}
							className={'hover:text-strongCyan'}
							text={'Privacy Policy'}
						/>
					</div>
					<div>
						<BtnLink
							href={'#'}
							className={'hover:text-strongCyan'}
							text={'Press Kit'}
						/>
					</div>
				</div>

				{/* MENU-3 */}
				<div className='flex flex-col space-y-4 text-center md:text-left'>
					<div>
						<BtnLink
							href={'#'}
							className={'hover:text-strongCyan'}
							text={'Install Guide'}
						/>
					</div>
				</div>
			</div>

			<div className='flex justify-between w-32 py-1'>
				<BtnLink
					href={'#'}
					className={'duration-200 ficon'}
					text={<img src={iconFacebook} alt='facebook icon' />}
				/>
				<BtnLink
					href={'#'}
					className={'duration-200 ficon'}
					text={<img src={iconInstagram} alt='facebook icon' />}
				/>
				<BtnLink
					href={'#'}
					className={'duration-200 ficon'}
					text={<img src={iconTwitter} alt='facebook icon' />}
				/>
			</div>
		</div>
	)
}

export default ItemsContainerFooter
