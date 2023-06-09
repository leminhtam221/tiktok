import routes from './routes';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnlyLayout } from '~/components/Layout';

export const publicRoutes = [
  {
    path: routes.Home,
    component: Home,
  },
  {
    path: routes.Following,
    component: Following,
  },
  {
    path: routes.Profile,
    component: Profile,
  },
  {
    path: routes.Upload,
    component: Upload,
    layout: HeaderOnlyLayout,
  },
  {
    path: routes.Search,
    component: Search,
    layout: null,
  },
];

export const privateRoutes = [];
