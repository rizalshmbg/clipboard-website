import { iconBlacklist, iconText, iconPreview } from '../assets/svg'

const ItemsContainerSupercharge = () => {
	return (
		<div className='flex flex-col items-center justify-between space-y-16 md:flex-row md:space-y-0 md:space-x-12'>
			{/* ITEM-1 */}
			<div className='flex flex-col items-center space-y-5'>
				<img src={iconBlacklist} alt='icon blacklist' className='mb-6' />
				<h5>Create Blacklist</h5>
				<p className='max-w-md text-grayishBlue'>
					Easily search your snippets by content, category, web address,
					application, and more.
				</p>
			</div>

			{/* ITEM-2 */}
			<div className='flex flex-col items-center space-y-5'>
				<img src={iconText} alt='icon blacklist' className='mb-6' />
				<h5>Plain Text Snippets</h5>
				<p className='max-w-md text-grayishBlue'>
					Remove unwanted formatting from copied text for a consistent look
				</p>
			</div>

			{/* ITEM-3 */}
			<div className='flex flex-col items-center space-y-5'>
				<img src={iconPreview} alt='icon blacklist' className='mb-6' />
				<h5>Sneak Preview</h5>
				<p className='max-w-md text-grayishBlue'>
					Quick preview of all snippets on your Clipboard for easy access.
				</p>
			</div>
		</div>
	)
}

export default ItemsContainerSupercharge
