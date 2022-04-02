import { Component } from '@angular/core';

import {users} from '../users';
@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.scss']
})
export class DishViewComponent {
  users = users;
  constructor() { }

}
