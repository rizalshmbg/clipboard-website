import {
	Access,
	BottomCTA,
	Features,
	Footer,
	Hero,
	References,
	Snippets,
	Supercharge,
} from './components'
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const App = () => {
	const comp = useRef(null)

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			const t1 = gsap.timeline()
			t1.from('#hero', {
				xPercent: -100,
				duration: 1.3,
				delay: 0.3,
			})
				.from(['#logo-1', '#title-1', '#title-2', '#btn-container'], {
					opacity: 0,
					y: '+=30',
					stagger: 0.5,
				})
				.from('#logo-1', {
					rotate: -360,
					stagger: 0.5,
					duration: 1.3,
				})
				.to('#logo-1', {
					scale: 1.2,
					stagger: 0.5,
					duration: 1,
				})
				.to('#logo-1', {
					scale: 1,
					stagger: 0.25,
					duration: 0.5,
				})
		}, comp)

		return () => ctx.revert()
	}, [])

	return (
		<div className='relative' ref={comp}>
			<Hero />
			<Snippets />
			<Features />
			<Access />
			<Supercharge />
			<References />
			<BottomCTA />
			<Footer />
		</div>
	)
}

export default App
