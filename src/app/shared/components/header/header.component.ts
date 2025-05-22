import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from "../buscador/buscador.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [BuscadorComponent,RouterLink]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
