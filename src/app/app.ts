import { Component } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { Home } from './core/home/home';
import { Courses } from './courses/courses/courses';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Home, Courses, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
