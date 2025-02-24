import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  darkMode = false;
  activePage: string = 'projects';
  constructor() {}

  ngOnInit() {}
}
