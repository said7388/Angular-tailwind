import { Component, OnInit } from '@angular/core';

const headerOptions: { title: string; link: string }[] = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About us',
    link: '/',
  },
  {
    title: 'Projects',
    link: '/',
  },
  {
    title: 'Contact',
    link: '/',
  },
  {
    title: 'Admin',
    link: '/',
  },
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  headers = headerOptions;

  ngOnInit(): void {}
}
