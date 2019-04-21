import React from 'react';
import { alphabets } from "../../utils/utilsConstants";
import ItemsViewer from '../../components/itemsViewer/ItemsViewer';

const AlphabetsViewer = () => {
    return (
        <ItemsViewer 
            list = {alphabets.split('').map(alphabet => ({
                body: alphabet,
                key: alphabet,
            }))}
        />
    );
}

export default AlphabetsViewer;