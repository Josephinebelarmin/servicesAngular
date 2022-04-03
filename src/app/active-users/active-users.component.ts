import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  @Input() users:string[];
  @Output() userEmitter = new EventEmitter<number>();

  onSetToInactive(index: number){
    this.userEmitter.emit(index);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
