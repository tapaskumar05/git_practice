import StartScreen from './views/startScreen/StartScreen';
import Menu from './views/menu/Menu';
import CharacterList from './views/characterList/CharacterList';

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
        path: '/characters',
        component: CharacterList,
        id: 'characters'
    }
]