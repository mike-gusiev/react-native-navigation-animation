import Start from './pages/Start';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import SignOut from './pages/SignOut';

export const routes = [
  {
    link: '/start',
    name: 'Start',
    Component: Start,
  },
  {
    link: '/cart',
    name: 'Your Cart',
    Component: Cart,
  },
  {
    link: '/favorites',
    name: 'Favorites',
    Component: Favorites,
  },
  {
    link: '/orders',
    name: 'Your Orders',
    Component: Orders,
  },
  {
    link: '/signout',
    name: 'Sign Out',
    Component: SignOut,
  },
];
