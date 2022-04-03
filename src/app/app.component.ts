import { Component, OnInit } from '@angular/core';
import { CounterService } from './counterService';
import { USerServive } from './userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [USerServive,CounterService]
})
export class AppComponent{
  title = 'servicesAssignment';

  // constructor(private userService: USerServive){}

  // ngOnInit(): void {
  //   this.userService.activeUsers;
  //   this.userService.inactiveUSers;
  // }
}
