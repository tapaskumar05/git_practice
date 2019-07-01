import React, {Fragment} from 'react';
import ItemsViewer from '../../components/itemsViewer/ItemsViewer';
import {numberList, defaultData} from "../../json/numbers";
import { ItemImage, ImageListContainer } from './style.js';

class NumbersViewer extends React.Component {
    componentWillMount () {
		const { KidsPlayStore, location } = this.props;
		const { setCurrentDataSet } = KidsPlayStore;
		setCurrentDataSet(location);
	}

    getItemCount(n, max) {
        const maxPerRow = Math.min(n, max);
        const rows = Math.ceil(n / maxPerRow);
        return Math.ceil(n / rows);
    }

    getImageHtml(image, n) {
        let list = [];

        const itemsPerRow = this.getItemCount(n, 4);
        
        for(let i=0;i<n;i++) {
            list.push(
                <ItemImage 
                    src = {image}
                    key = {`image` + i}
                    itemsPerRow = {itemsPerRow}
                >
                </ItemImage>
            );
        }

        return (
            <ImageListContainer>
                {list}
            </ImageListContainer>
        );
    }

    getExample(n) {
        const example = numberList[n-1];
        let obj = {...defaultData};

        if(example) {
            obj = {...obj, ...example};
        }

        if(obj.image) {
            return obj;
        } else {
            obj.html = this.getImageHtml(obj.singleImage, n);
        }

        return obj;
    }

    render () {
        const { KidsPlayStore } = this.props;
		const { currentRouteDataArr, currentIndex } = KidsPlayStore;
		const numbers = currentRouteDataArr;
        return (
            <ItemsViewer 
                list = {numbers.split('').map(number => {
                    const {
                        html=null,
                        text='',
                        image
                    } = this.getExample(number);

                    return {
                        key: number,
                        left: number,
                        footerText: text,
                        html,
                        image
                    };
                })}
                currentIndex = {currentIndex}
            />
        );
    }
}

export default NumbersViewer;