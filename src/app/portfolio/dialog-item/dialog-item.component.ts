import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-item',
  templateUrl: './dialog-item.component.html',
  styleUrls: ['./dialog-item.component.css']
})
export class DialogItemComponent implements OnInit {

  name: string|undefined;  
  constructor() { }

  ngOnInit(): void {
  }

}
