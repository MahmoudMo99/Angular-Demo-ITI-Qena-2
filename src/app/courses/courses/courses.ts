import { Component } from '@angular/core';
import { ITrack } from '../models/itrack';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HoverCard } from '../../core/directives/hover-card';
import { TruncatePipe } from '../../core/pipes/truncate-pipe';
import { TrackCard } from '../../shared/track-card/track-card';

@Component({
  selector: 'app-courses',
  imports: [FormsModule, CommonModule, HoverCard, TruncatePipe, TrackCard],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  searchTerm: string = '';

  myClasses: string = 'text-center p-2';

  currentDate = new Date();

  constructor() {
    this.filterTracks();
  }

  tracks: ITrack[] = [
    {
      id: 1,
      name: 'MEARN Development',
      description: 'MEARN is Number One',
      hours: 400,
      coursesCount: 25,
      studentsCount: 18,
      price: 200000000000000000000,
    },
    {
      id: 2,
      name: 'Dot Net Development',
      description: 'Dot Net is Number Two',
      hours: 450,
      coursesCount: 30,
      studentsCount: 23,
      price: 20,
    },

    {
      id: 3,
      name: 'Software Development',
      description: 'Software is Number Three',
      hours: 350,
      coursesCount: 25,
      studentsCount: 20,
      price: 20,
    },

    {
      id: 4,
      name: 'Power BI',
      description: 'Power BI Number Four',
      hours: 200,
      coursesCount: 10,
      studentsCount: 15,
      price: 20,
    },

    {
      id: 5,
      name: 'UI/UX Design',
      description: 'UI/UX Number Five',
      hours: 100,
      coursesCount: 5,
      studentsCount: 10,
      price: 20,
    },

    {
      id: 6,
      name: 'Python Development',
      description: 'Python Number Six',
      hours: 70,
      coursesCount: 2,
      studentsCount: 2,
      price: 20,
    },
  ];

  filteredTracks: ITrack[] = [];

  filterTracks() {
    if (!this.searchTerm.trim()) {
      this.filteredTracks = this.tracks;
      return;
    } else {
      this.filteredTracks = this.tracks.filter((t) =>
        t.name.toLowerCase().includes(this.searchTerm.toLowerCase()),
      );
    }
  }

  increaseStd(t: ITrack) {
    t.studentsCount++;
  }

  deleteTrack(id: number) {
    this.tracks = this.tracks.filter((t) => t.id !== id);
    this.filterTracks();
  }
}
