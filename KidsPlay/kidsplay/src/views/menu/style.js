import styled from '@emotion/styled';

const TabContainer = styled.div`
    justify-content: space-evenly;
`;

const TabButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font: 24px/1em 'Droid Sans', sans-serif;
    font-weight: bold;
    text-shadow: rgba(255,255,255,.5) 0 1px 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    padding: .5em .6em .4em .6em;
    margin: .5em;
    display: inline-block;
    position: relative;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    border-top: 1px solid rgba(255,255,255,0.8);
    border-bottom: 1px solid rgba(0,0,0,0.1);
    background-image: -webkit-gradient(radial, 50% 0, 100, 50% 0, 0, from( rgba(255,255,255,0) ), to( rgba(255,255,255,0.7) )), url(noise.png);
    background-image: -moz-radial-gradient(top, ellipse cover, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%), url(noise.png);
    background-image: gradient(radial, 50% 0, 100, 50% 0, 0, from( rgba(255,255,255,0) ), to( rgba(255,255,255,0.7) )), url(noise.png);
    -webkit-transition: background .2s ease-in-out;
    -moz-transition: background .2s ease-in-out;
    transition: background .2s ease-in-out;
    color: hsl(0, 0%, 40%) !important;
    background-color: hsl(0, 0%, 75%);
    -webkit-box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */ rgba(0,0,0,0.2) 0 .5em 5px;
    -moz-box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */ rgba(0,0,0,0.2) 0 .5em 5px;
    box-shadow: inset rgba(255,254,255,0.6) 0 0.3em .3em, inset rgba(0,0,0,0.15) 0 -0.1em .3em, /* inner shadow */ hsl(0, 0%, 60%) 0 .1em 3px, hsl(0, 0%, 45%) 0 .3em 1px, /* color border */ rgba(0,0,0,0.2) 0 .5em 5px;
`;

export {
    TabContainer,
    TabButton
}