import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Shortener } from './pages/shortener/shortener';
import { Stats } from './pages/stats/stats';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'shortener', component: Shortener },
    { path: 'stats', component: Stats },
];
