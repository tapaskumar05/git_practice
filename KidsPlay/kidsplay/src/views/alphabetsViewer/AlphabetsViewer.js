import React from 'react';
import alphabetExamples from "../../json/alphabets";
import ItemsViewer from '../../components/itemsViewer/ItemsViewer';

class AlphabetsViewer extends React.Component {
	componentWillMount () {
		const { KidsPlayStore, location } = this.props;
		const { setCurrentDataSet } = KidsPlayStore;
		setCurrentDataSet(location);
	}
	render () {
		const { KidsPlayStore } = this.props;
		const { currentRouteDataArr, currentIndex } = KidsPlayStore;
		const alphabets = currentRouteDataArr;
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
				currentIndex = {currentIndex}
			/>
		);
	}
}

export default AlphabetsViewer;