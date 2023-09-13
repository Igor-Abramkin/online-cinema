import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import SliderArrow from './SliderArrow/SliderArrow'
import { ISlide } from './slider.iterface'
import { useSlider } from './useSlider'

interface iSlider {
	slides: ISlide[]
	buttonTitle?: string
}

const Slider: FC<iSlider> = ({ slides, buttonTitle }) => {
	const { handleClick, index, isNext, isPrev, slideIn } = useSlider(
		slides.length
	)

	return (
		<div className={styles.slider}>
			<CSSTransition
				in={slideIn}
				classNames="slide-animation"
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
			</CSSTransition>

			{isPrev && (
				<SliderArrow variant="left" clickHandler={() => handleClick('prev')} />
			)}
			{isNext && (
				<SliderArrow variant="right" clickHandler={() => handleClick('next')} />
			)}
		</div>
	)
}

export default Slider
