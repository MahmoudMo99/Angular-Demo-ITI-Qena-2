import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITrack } from '../../courses/models/itrack';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../core/pipes/truncate-pipe';

@Component({
  selector: 'app-track-card',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './track-card.html',
  styleUrl: './track-card.css',
})
export class TrackCard {
  active: boolean = true;

  @Input() trackItem!: ITrack;

  @Output() deleted = new EventEmitter<number>();

  @Output() inserted = new EventEmitter<ITrack>();

  delete(id: number) {
    this.deleted.emit(id);
  }

  increase(track: ITrack) {
    this.inserted.emit(track);
  }
}
