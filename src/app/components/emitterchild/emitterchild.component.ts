import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitterchild',
  templateUrl: './emitterchild.component.html',
  styleUrls: ['./emitterchild.component.css']
})
export class EmitterchildComponent implements OnInit {

  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    console.log("hey");
    
    this.clickEvent.emit();
  }
}
