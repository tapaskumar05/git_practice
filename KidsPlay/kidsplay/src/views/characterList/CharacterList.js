import React from 'react';
import ItemList from '../../components/itemList/ItemList';
import { alphabets } from "../../utils/utilsConstants";

const CharacterList = ({history}) => {
    return (
        <ItemList
            itemList = {alphabets.split('').map(alphabet => ({
                body: alphabet,
                key: alphabet,
                href: `/characters/${alphabet}`
            }))}
            onClick = {url => history.push(url)}
            title = 'Alphabets'
        />
    );
}

export default CharacterList;