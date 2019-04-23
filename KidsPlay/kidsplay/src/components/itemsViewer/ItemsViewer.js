import React from 'react';
import CommonSlider from '../commonSlider/CommonSlider';
import SingleItemViewer from '../singleItemViewer/SingleItemViewer';
import SliderStyling from './SliderStyling';

const ItemsViewer = ({ list, currentIndex = 0 }) => {
    const listHtml = list.map(item => {
        return (
            <SingleItemViewer 
                item = {item}
                key = {item.key}
            />
        );
    });

    return (
        <div className="items-viewer">
            <SliderStyling />
            <CommonSlider
                settings = {{
                    centerMode: true,
                    initialSlide: currentIndex
                }}
            >
                {listHtml}
            </CommonSlider>
        </div>
    );
}

export default ItemsViewer;