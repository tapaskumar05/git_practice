import React from 'react';
import { alphabets } from "../../utils/utilsConstants";
import alphabetExamples from "../../json/alphabets";
import ItemsViewer from '../../components/itemsViewer/ItemsViewer';

const AlphabetsViewer = () => {
    return (
        <ItemsViewer 
            list = {alphabets.split('').map(alphabet => {
            	const lowerCase = alphabet.toLowerCase();
            	const example = alphabetExamples[lowerCase] || {};
            	return {
	                key: alphabet,
	                left: alphabet,
	                right: lowerCase,
	                image: example.image,
	                footerText: example.text
	            }
            })}
        />
    );
}

export default AlphabetsViewer;