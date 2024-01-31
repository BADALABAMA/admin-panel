import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  homeBtn: string = 'Home';
  aboutBtnTitle: string = 'About';
  productsBtnTitle: string = 'Products';
}
