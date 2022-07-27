import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const services: {
  title: string;
  img: string;
  price: number;
  text: string;
}[] = [
  {
    title: 'Office Interior Design',
    img: 'https://i.ibb.co/q02kdZP/apartment-1.png',
    price: 299,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    title: 'Showroom Design',
    img: 'https://i.ibb.co/JKk0czy/affordable-1.png',
    price: 399,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    title: 'Residential/ Home',
    img: 'https://i.ibb.co/NSNgP1R/lessee-1.png',
    price: 499,
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  faLocationDot = faLocationDot;
  services = services;
  constructor() {}

  ngOnInit(): void {}
}
