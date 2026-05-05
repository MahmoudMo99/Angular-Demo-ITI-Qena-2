import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Courses } from '../courses/courses';

@Component({
  selector: 'app-tracks-search',
  imports: [FormsModule, Courses],
  templateUrl: './tracks-search.html',
  styleUrl: './tracks-search.css',
})
export class TracksSearch {
  searchTermParent: string = '';
}
