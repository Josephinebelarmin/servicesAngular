import { Component, OnInit} from '@angular/core';
import { USerServive } from '../userService';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

 users:string[];
 constructor(private userService: USerServive){}

 ngOnInit() {
  this.users = this.userService.activeUsers;
}

  onSetToInactive(index: number){
    this.userService.setToInactive(index);
  }


  

}
