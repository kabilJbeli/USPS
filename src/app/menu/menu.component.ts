import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'English',
        icon: 'pi pi-fw pi-globe',
      },
      {
        label: 'Locations',
        icon: 'pi pi-fw pi-map-marker',
      },
      {
        label: 'Support',
        icon: 'pi pi-fw pi-id-card',
      },
      {
        label: 'Informed Delivery',
        icon: 'pi pi-fw pi-pencil',
      },
      {
        label: 'Register / Sign In',
      }
    ];
  }

}
