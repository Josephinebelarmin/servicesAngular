import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  @Input() users:string[];
  @Output() userEmitter = new EventEmitter<number>();

  onSetToActive(index: number){
    this.userEmitter.emit(index);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
