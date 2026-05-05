import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Courses } from './courses/courses/courses';
import { AboutUs } from './core/about-us/about-us';
import { ContactUs } from './core/contact-us/contact-us';
import { NotFound } from './core/not-found/not-found';
import { TrackDetails } from './courses/track-details/track-details';
import { TracksSearch } from './courses/tracks-search/tracks-search';
import { Login } from './auth/components/login/login';
import { Register } from './auth/components/register/register';

export const routes: Routes = [
  // first wins strategy
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },

  {
    path: 'courses',
    component: Courses,
  },
  {
    path: 'courses-search',
    component: TracksSearch,
  },
  {
    path: 'courses/:id',
    component: TrackDetails,
  },
  {
    path: 'about-us',
    component: AboutUs,
  },
  {
    path: 'contact-us',
    component: ContactUs,
  },

  {
    path: 'login',
    component: Login,
  },

  {
    path: 'register',
    component: Register,
  },

  // Wildcard Path
  {
    path: '**',
    component: NotFound,
  },
];
