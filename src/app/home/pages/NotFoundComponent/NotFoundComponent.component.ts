import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-NotFoundComponent',
  templateUrl: './NotFoundComponent.component.html',
  styleUrls: ['./NotFoundComponent.component.css'],
  imports:[RouterLink]
})
export class NotFoundComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
