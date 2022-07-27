import { Component, OnInit } from '@angular/core';
const heroData = {
  title: 'We Build \n Your Dream',
  text: 'Online Easte Agency, the mordern way to sell your own home You can use Griffin Residential to market your property',
  button: 'Booking',
  img: 'https://i.ibb.co/PNJ8j7J/hero.png',
};

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  constructor() {}
  hero: any = heroData;
  ngOnInit(): void {}
}
