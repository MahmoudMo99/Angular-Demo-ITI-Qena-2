import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITrack } from '../models/itrack';
import { TracksService } from '../services/tracks-service';

@Component({
  selector: 'app-track-details',
  imports: [],
  templateUrl: './track-details.html',
  styleUrl: './track-details.css',
})
export class TrackDetails {
  trackDetails: ITrack | undefined;

  constructor(
    private activated: ActivatedRoute,
    private tracksService: TracksService,
    private router: Router,
  ) {
    // console.log(this.activated.snapshot.paramMap.get('id')); //1
    // console.log(typeof this.activated.snapshot.paramMap.get('id')); //string

    const id = Number(this.activated.snapshot.paramMap.get('id'));
    console.log(id);
    console.log(typeof id);

    this.trackDetails = this.tracksService.getTrackById(id);

    console.log(this.trackDetails);
  }

  back() {
    this.router.navigate(['/courses']);
  }
}
