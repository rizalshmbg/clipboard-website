const ItemsContainerFeatures = () => {
	return (
		<div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
			{/* ITEM-1 */}
			<h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
				Quick Search
			</h5>
			<p className='max-w-md text-grayishBlue'>
				Easily search your snippets by content, category, web address,
				application, and more.
			</p>

			{/* ITEM-2 */}
			<h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
				iCloud Sync
			</h5>
			<p className='max-w-md text-grayishBlue'>
				Instantly saves and syncs snippets across all your devices.
			</p>

			{/* ITEM-3 */}
			<h5 className='mb-2 text-2xl font-bold text-darkGrayishBlue'>
				Completely History
			</h5>
			<p className='max-w-md text-grayishBlue'>
				Retrieve any snippets from the first moment you started using the app.
			</p>
		</div>
	)
}

export default ItemsContainerFeatures
