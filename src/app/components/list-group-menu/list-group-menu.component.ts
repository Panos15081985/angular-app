import { Component } from '@angular/core';
import { MenuEntry } from '../../shared/interfaces/menu-entry';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})

export class ListGroupMenuComponent {
  menu: MenuEntry[] =[
    {text: "Component Input Example", routerLink:"component-input-example"},
    {text: "@for DIrective Example", routerLink: "for-directive-example"},
    {text:"Event Bind Example", routerLink: "event-bind-example"},
    {text:"Simple Data Table", routerLink:"simple-data-table"},
    {text:"Component Output example", routerLink:"component-output-example"},
    {text:"Reactive Forms", routerLink:"reactive-forms"},
    {text:"Template Driven Form",routerLink:"template-driven-form"},
    {text:"Http client example", routerLink:"http-client-example"},
    {text:"user Registration Example", routerLink:"user-registration-example"},
    {text: "Restricted Content Example", routerLink: "restricted-content-example"},
    {text: "CRUD Example", routerLink: "crud-example"}
    
  ]
}
