import React from 'react';
import CommonSlider from '../commonSlider/CommonSlider';
import SingleItemViewer from '../singleItemViewer/SingleItemViewer';
import SliderStyling from './SliderStyling';

const ItemsViewer = ({list}) => {
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
                    centerMode: true
                }}
            >
                {listHtml}
            </CommonSlider>
        </div>
    );
}

export default ItemsViewer;