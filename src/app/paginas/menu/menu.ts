import { Component } from '@angular/core';
import { Navbar } from '../../componentes/navbar/navbar';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [Navbar],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {}