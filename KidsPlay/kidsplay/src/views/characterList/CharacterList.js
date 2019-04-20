import React from 'react';
import ItemList from '../../components/itemList/ItemList';
import { alphabets } from "../../utils/utilsConstants";
import {ListContainer} from './style';

const CharacterList = () => {
    return (
        <ListContainer className="route-holder">
            <ItemList
                itemList={alphabets.split('')}
            />
        </ListContainer>
    )
}

export default CharacterList;