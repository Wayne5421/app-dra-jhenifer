import { Component } from '@angular/core';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent {
  images = [
    'clinica.JPG',
    'clinica_1.JPG',
    'clinica_2.JPG',
    'clinica_3.JPG',
    'clinica_4.JPG',
    'clinica_6.JPG',
    'clinica_7.JPG',
    'clinica_8.JPG'
  ];

  currentIndex = 0;

  get transform() {

    return `translateX(-${this.currentIndex * 25}%)`;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
