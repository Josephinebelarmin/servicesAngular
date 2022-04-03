import { Component, OnInit } from '@angular/core';
import { USerServive } from '../userService';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

 users:string[];
 constructor(private userservive: USerServive){}
 ngOnInit(): void {
   this.users = this.userservive.inactiveUSers
 }

  onSetToActive(index: number){
  this.userservive.setToActive(index);
  }

  

}
