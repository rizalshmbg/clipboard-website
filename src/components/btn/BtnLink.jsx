const BtnLink = ({ href, className, text, id }) => {
	return (
		<a href={href} className={className} id={id || 'btn-link'}>
			{text}
		</a>
	)
}

export default BtnLink
