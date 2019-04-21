import React from 'react';
import Slider from 'react-slick';

const CommonSlider = ({ children, settings}) => {
	const sliderSettings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		lazyLoad: true,
		...settings
	}
	return (
    	<Slider {...sliderSettings}>
    		{children}
    	</Slider>
    );
};

CommonSlider.defaultProps = {
	settings: {},
}

export default CommonSlider;