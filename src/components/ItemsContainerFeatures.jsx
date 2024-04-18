const ItemsContainerFeatures = () => {
	return (
		<div className='flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16'>
			{/* ITEM-1 */}
			<div>
				<h5>Quick Search</h5>
				<p className='max-w-md text-grayishBlue'>
					Easily search your snippets by content, category, web address,
					application, and more.
				</p>
			</div>

			{/* ITEM-2 */}
			<div>
				<h5>iCloud Sync</h5>
				<p className='max-w-md text-grayishBlue'>
					Instantly saves and syncs snippets across all your devices.
				</p>
			</div>

			{/* ITEM-3 */}
			<div>
				<h5>Completely History</h5>
				<p className='max-w-md text-grayishBlue'>
					Retrieve any snippets from the first moment you started using the app.
				</p>
			</div>
		</div>
	)
}

export default ItemsContainerFeatures
