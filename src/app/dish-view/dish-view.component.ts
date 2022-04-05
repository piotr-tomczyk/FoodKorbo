import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {users} from '../users';
@Component({
  selector: 'app-dish-view',
  templateUrl: './dish-view.component.html',
  styleUrls: ['./dish-view.component.scss']
})
export class DishViewComponent implements OnInit{
  users = users;
  isLogged = false;
  constructor(private route:ActivatedRoute) { }
  ngOnInit(): void {
    if(this.route.snapshot.paramMap.get('isLogged')){
      this.isLogged = true;
    }
  };
  LogOut(){
    users.forEach(user => {
      if(user.isLogged == true){
        user.isLogged = false;
        this.isLogged = false;
        return;
      }
    });
  }
}
