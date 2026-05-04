import { Injectable } from '@angular/core';
import { ITrack } from '../models/itrack';

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  private tracks: ITrack[] = [
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

  getAllTracks(): ITrack[] {
    return [...this.tracks];
  }

  getTrackById(id: number): ITrack | undefined {
    return this.tracks.find((t) => t.id === id);
  }

  deleteTrack(id: number) {
    this.tracks = this.tracks.filter((t) => t.id !== id);
  }

  addTrack(name: string) {
    const nextId = Math.max(...this.tracks.map((t) => t.id), 0) + 1;

    this.tracks.unshift({
      id: nextId,
      name,
      description: 'This is ITI new Track',
      hours: 70,
      coursesCount: 20,
      studentsCount: 50,
      price: 250,
    });
  }

  increase(track: ITrack) {
    const found = this.tracks.find((t) => t.id === track.id);
    if (found) {
      track.studentsCount++;
    }
  }
}
