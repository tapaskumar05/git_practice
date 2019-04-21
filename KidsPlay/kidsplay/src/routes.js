import StartScreen from './views/startScreen/StartScreen';
import Menu from './views/menu/Menu';
import CharacterList from './views/characterList/CharacterList';
import NumberList from './views/numberList/NumberList';
import Color from './views/color/Color';
import AlphabetsViewer from './views/alphabetsViewer/AlphabetsViewer';
import NumbersViewer from './views/numbersViewer/NumbersViewer';

export default [
    {
        path: '/',
        component: StartScreen,
        id: 'startScreen',
        className: 'start-screen'
    },
    {
        path: '/menu',
        component: Menu,
        id: 'menu',
        className: 'menu'
    },
    {
        path: '/characters/:character',
        component: AlphabetsViewer,
        id: 'alphabetViewer',
        className: 'alphabet-viewer'
    },
    {
        path: '/characters',
        component: CharacterList,
        id: 'characters',
        className: 'characters'
    },
    {
        path: '/numbers/:number',
        component: NumbersViewer,
        id: 'numberViewer',
        className: 'number-viewer'
    },
    {
        path: '/numbers',
        component: NumberList,
        id: 'numbers',
        className: 'numbers'
    },
    {
        path: '/color',
        component: Color,
        id: 'colors',
        className: 'colors'
    }
]