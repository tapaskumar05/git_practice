import styled from '@emotion/styled';

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ListItem = styled.div`
    width: ${prop => {
        return `${100/prop.itemsInARow}%`;
    }};
`;

export {
    ListContainer,
    ListItem
};