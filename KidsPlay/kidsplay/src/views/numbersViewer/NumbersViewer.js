import React from 'react';
import { numbers } from "../../utils/utilsConstants";
import ItemsViewer from '../../components/itemsViewer/ItemsViewer';

const NumbersViewer = () => {
    return (
        <ItemsViewer 
            list = {numbers.split('').map(number => ({
                key: number,
                left: number,
                //image: example.image,
                footerText: 'one'
            }))}
        />
    );
}

export default NumbersViewer;