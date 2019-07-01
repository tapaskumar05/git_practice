import styled from '@emotion/styled';

const ImageListContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    align-items: center;
	max-height: 100%;
	max-width: 100%;
`;

const ItemImage = styled.img`
	max-height: 100%;
	max-width: 100%;
	width: ${prop => (100 / prop.itemsPerRow) + '%'};
`;

export {
	ItemImage,
	ImageListContainer
};