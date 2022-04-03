import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'servicesAssignment';

  activeUsers = ['Anne', 'Jerald','juan'];
  inactiveUSers = ['Max', 'Roldan', 'jason'];

  OnInactiveToActive(index: number){
this.activeUsers.push(this.inactiveUSers[index]);
this.inactiveUSers.splice(index,1);
  }

  OnactiveToInActive(index: number){
this.inactiveUSers.push(this.activeUsers[index]);
this.activeUsers.splice(index, 1);
  }


}
