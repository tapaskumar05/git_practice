import React from 'react';
import { ListContainer, ListItem, ItemDiv, ListTitle } from './style';
import {randomColor, contrastColor} from '../../utils/utilsFunctions';

const ItemList = ({className, title, itemList, itemsInARow, onClick}) => {
    return (
        <ListContainer
            className = {className}
        >
            {title ? (
                <ListTitle>{title}</ListTitle>
            ) : null}
            {itemList.map(item => {
                const color = randomColor();
                const [r, g, b] = contrastColor(color, true);
                return (
                    <ListItem 
                        itemsInARow = {itemsInARow} 
                        key = {item.key}
                        onClick = {() => onClick(item.href)}
                        backgroundColor = {`rgba(${r}, ${g}, ${b}, 0.8)`}
                        color = {color}
                    >
                        <ItemDiv>
                            {item.body}
                        </ItemDiv>
                    </ListItem>
                );
            })}
        </ListContainer>
    );
}

ItemList.defaultProps = {
    className: '',
    itemsInARow: 4
}

export default ItemList;