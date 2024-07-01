import { Component } from '@angular/core';


interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { title: 'Contador', link: 'counter' },
    { title: 'Usuario', link: 'user-info' },
    { title: 'Mutaciones', link: 'properties' }
  ];
}
