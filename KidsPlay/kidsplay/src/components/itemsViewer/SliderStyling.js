import React from 'react';

const SliderStyling = () => {
    const styling = `
        .slick-arrow {
			top: calc(100% + 15px);
		    transform: none;
	        height: 40px;
			width: 40px;
        }
        .slick-arrow.slick-prev {
        	left: 15px;
        }
        .slick-arrow.slick-next {
        	right: 15px;
        }
        .slick-arrow:before {
        	opacity: 1;
        	font-size: 40px;
        	color: #333;
        }
        .slick-disabled {
        	display: none !important;
        }
        .slick-active .viewer-item {
            transform: scale(1);
        }
    `;
    return (
        <style
            dangerouslySetInnerHTML = {{__html: styling}}
        ></style>
    );
};

export default SliderStyling;