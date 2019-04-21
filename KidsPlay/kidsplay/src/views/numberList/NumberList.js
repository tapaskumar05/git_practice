import React from 'react';
import ItemList from '../../components/itemList/ItemList';
import { numbers } from "../../utils/utilsConstants";

const NumberList = ({history}) => {
    return (
        <ItemList
            itemList = {numbers.split('').map(number => ({
                body: number,
                key: number,
                href: `/numbers/${number}`
            }))}
            itemsInARow = {2}
            onClick = {url => history.push(url)}
        />
    );
}

export default NumberList;