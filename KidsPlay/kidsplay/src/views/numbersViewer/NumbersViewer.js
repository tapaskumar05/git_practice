import React from 'react';
import ItemsViewer from '../../components/itemsViewer/ItemsViewer';

class NumbersViewer extends React.Component {
    componentWillMount () {
		const { KidsPlayStore, location } = this.props;
		const { setCurrentDataSet } = KidsPlayStore;
		setCurrentDataSet(location);
	}
    render () {
        const { KidsPlayStore } = this.props;
		const { currentRouteDataArr, currentIndex } = KidsPlayStore;
		const numbers = currentRouteDataArr;
        return (
            <ItemsViewer 
                list = {numbers.split('').map(number => ({
                    key: number,
                    left: number,
                    //image: example.image,
                    footerText: 'one'
                }))}
                currentIndex = {currentIndex}
            />
        );
    }
}

export default NumbersViewer;