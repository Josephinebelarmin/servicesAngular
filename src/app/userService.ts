import { Injectable } from "@angular/core";
import { CounterService } from "./counterService";
@Injectable()
export class USerServive{

    activeUsers = ['Anne', 'Jerald','juan'];
    inactiveUSers = ['Max', 'Roldan', 'jason'];

    constructor(private counterService: CounterService){}

    setToActive(id:number){
        this.activeUsers.push(this.inactiveUSers[id]);
        this.inactiveUSers.splice(id,1);
        this.counterService.incrementInActiveToActive();

    }
    setToInactive(id:number){
this.inactiveUSers.push(this.activeUsers[id]);
this.activeUsers.splice(id,1);
this.counterService.incrementActiveToInactive();
    }
}