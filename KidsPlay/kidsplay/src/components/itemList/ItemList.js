import React from 'react';
import { ListContainer, ListItem } from './style';

const ItemList = ({className, itemList, itemsInARow, onClick}) => {
    return (
        <ListContainer
            className = {className}
        >
            {itemList.map(item => {
                return (
                    <ListItem 
                        itemsInARow = {itemsInARow} 
                        key = {item.key}
                        onClick = {() => onClick(item.href)}
                    >
                        {item.body}
                    </ListItem>
                );
            })}
        </ListContainer>
    );
}

ItemList.defaultProps = {
    className: '',
    itemsInARow: 5
}

export default ItemList;