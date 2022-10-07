import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Following from '../pages/Following';
import Upload from '../pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

//k can dang nhap cung xem dc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

//can dang nhap
const privateRoute = [];

export { privateRoute, publicRoutes };
