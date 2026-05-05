import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITrack } from '../models/itrack';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TrackCard } from '../../shared/track-card/track-card';
import { TracksService } from '../services/tracks-service';
@Component({
  selector: 'app-courses',
  imports: [FormsModule, CommonModule, TrackCard],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit, OnChanges {
  @Input() searchTerm: string = '';

  myClasses: string = 'text-center p-2';
  currentDate = new Date();

  trackName: string = '';

  tracks: ITrack[] = [];
  filteredTracks: ITrack[] = [];

  private trackService = inject(TracksService);

  // Dependency Injection
  // Variables Initialization
  // constructor(private trackService: TracksService) {}

  // load data
  ngOnInit(): void {
    this.loadTracks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['searchTerm']) this.loadTracks();
  }

  loadTracks() {
    this.getTracks();
    this.filterTracks();
  }

  getTracks() {
    this.tracks = this.trackService.getAllTracks();
  }

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
    this.trackService.increase(t);
    this.loadTracks();
  }

  deleteTrack(id: number) {
    this.trackService.deleteTrack(id);
    this.loadTracks();
  }

  addTrack() {
    this.trackService.addTrack(this.trackName);
    this.loadTracks();
    this.trackName = '';
  }
}
