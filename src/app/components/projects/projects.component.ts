import { Component, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const projects: { title: string; img: string; location: string }[] = [
  {
    title: 'Villa on Washington Avenue',
    img: 'https://i.ibb.co/MsTsNcn/Mask-Group.png',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Luxury villa in Rego Park',
    img: 'https://i.ibb.co/ckn8Ps9/pierre-chatel-innocenti-u4dd-Xsj-ULQ-unsplash-1.png',
    location: 'Dhaka, Bangladesh',
  },
  {
    title: 'Gorgeous house',
    img: 'https://i.ibb.co/r5NGXkP/Mask-Group-1.png',
    location: 'Dhaka, Bangladesh',
  },
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = projects;
  faLocation = faLocationDot;
  constructor() {}

  ngOnInit(): void {}
}
