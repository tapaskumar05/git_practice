import styled from '@emotion/styled';

const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 500px;
    margin: 5px;
    border 1px solid #333;
`;

const Header = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 15px;
    margin-bottom: 15px;
`;

const HeaderDataPoint = styled.div`
width: 50px;`;

const Image = styled.img`
    display: block;
    width: auto;
    max-width: 100%;
    max-height: 300px;
`;

const Footer = styled.div`
	width: 100%;
    padding: 15px;
    text-align: center;
    margin-top: 15px;
`;

export {
    Item,
    Header,
    HeaderDataPoint,
    Image,
    Footer
};