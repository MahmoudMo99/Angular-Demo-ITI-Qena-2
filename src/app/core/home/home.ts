import { Component } from '@angular/core';
import { ITIData } from '../models/itidata';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  data: ITIData = {
    title: 'ITI Portal Project',
    description: 'ITI',
    isOpen: true,
    branchesCount: 25,
    tracksCount: 4,
  };

  imgSrc: string = 'images/logo.png';
  imgAlt: string = 'logo image';

  inputType: string = 'text';

  inputPlace: string = 'Enter Your Name...';

  userName: string = 'mahmoud mohamed mahmoud';

  displayName() {
    alert('My Name is Mahmoud');
  }

  changeImageSrc() {
    this.imgSrc = 'images/iti.jpg';
  }
}
