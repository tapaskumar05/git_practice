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
        id: 'startScreen'
    },
    {
        path: '/menu',
        component: Menu,
        id: 'menu'
    },
    {
        path: '/characters/:character',
        component: AlphabetsViewer,
        id: 'alphabetViewer'
    },
    {
        path: '/characters',
        component: CharacterList,
        id: 'characters'
    },
    {
        path: '/numbers/:number',
        component: NumbersViewer,
        id: 'numberViewer'
    },
    {
        path: '/numbers',
        component: NumberList,
        id: 'numbers'
    },
    {
        path: '/color',
        component: Color,
        id: 'colors'
    }
]