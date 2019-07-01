import React from 'react';
import ItemList from '../../components/itemList/ItemList';
import { numbers } from "../../utils/utilsConstants";

const NumberList = (props) => {
    const {history} = props;
    return (
        <ItemList
            itemList = {numbers.split('').map(number => ({
                body: number,
                key: number,
                href: `/numbers/${number}`
            }))}
            itemsInARow = {3}
            onClick = {url => history.push(url)}
            title = 'Numbers'
        />
    );
}

export default NumberList;