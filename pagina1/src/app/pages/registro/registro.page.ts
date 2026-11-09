import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false,
})
export class RegistroPage implements OnInit {

  usuario: string = '';
  contrasena: string = '';
  constructor() { }

  ngOnInit() {
  }

}
