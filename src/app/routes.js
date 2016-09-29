import DashboardContainer from './components/dashboardContainer';
import NotFound from './components/notFound';
import HeroesContainer from './components/heroesContainer';
import HeroDetailContainer from './components/heroDetailContainer';

export default [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardContainer,
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: HeroesContainer,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: HeroDetailContainer,
  },
  {
    path: '*',
    component: NotFound,
  },
];
