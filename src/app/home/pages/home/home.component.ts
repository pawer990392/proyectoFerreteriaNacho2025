import { Component, OnInit } from '@angular/core';
import { CaruselComponent } from "../../../shared/components/carusel/carusel.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CaruselComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
