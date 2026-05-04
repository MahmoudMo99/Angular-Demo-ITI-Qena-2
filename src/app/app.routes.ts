import { Routes } from '@angular/router';
import { Home } from './core/home/home';
import { Courses } from './courses/courses/courses';
import { AboutUs } from './core/about-us/about-us';
import { ContactUs } from './core/contact-us/contact-us';
import { NotFound } from './core/not-found/not-found';
import { TrackDetails } from './courses/track-details/track-details';

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
    path: '**',
    component: NotFound,
  },
];
