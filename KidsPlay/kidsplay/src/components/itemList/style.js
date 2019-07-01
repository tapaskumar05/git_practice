import styled from '@emotion/styled';

const itemMargin = 5;

const ListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px;
`;

const ListItem = styled.div(props => {
    const dimensionCalc = `calc(${100/props.itemsInARow}% - ${itemMargin*2}px)`;
    return {
        flex: `0 1 ${dimensionCalc}`,
        paddingTop: dimensionCalc,
        position: 'relative',
        display: 'flex',
        'justifyContent': 'center',
        'alignItems': 'center',
        margin: `${itemMargin}px`,
        'fontSize': '10vw',
        'borderRadius': '50%',
        'boxShadow': '0 0 5px 0px rgba(0, 0, 0, 0.35)',
        'backgroundColor': props.backgroundColor,
        color: props.color,
    };
});


const ItemDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const ListTitle = styled.div`
    font-size: 30px;
    flex: 0 0 100%;
    margin: 10px 5px 30px;
`;

export {
    ListTitle,
    ListContainer,
    ListItem,
    ItemDiv
};