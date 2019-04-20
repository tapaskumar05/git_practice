import React from 'react';
import { ListContainer, ListItem } from './style';

const ItemList = ({itemList, itemsInARow}) => {
    return (
        <ListContainer>
            {itemList.map(item => {
                return (
                    <ListItem 
                        itemsInARow = {itemsInARow} 
                        key = {item}
                    >
                        {item}
                    </ListItem>
                );
            })}
        </ListContainer>
    );
}

ItemList.defaultProps = {
    itemsInARow: 5
}

export default ItemList;