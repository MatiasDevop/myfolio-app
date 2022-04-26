import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmitterchildComponent } from '../emitterchild/emitterchild.component';

@Component({
  selector: 'app-emitterparent',
  templateUrl: './emitterparent.component.html',
  styleUrls: ['./emitterparent.component.css']
})
export class EmitterparentComponent implements OnInit {

  count = 0;
  subscription: Subscription | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  subscribeToEmmiter(componentRef:any){
    console.log("parent...");
    
    if (!(componentRef instanceof EmitterchildComponent)) {
      return;
    }
    const child: EmitterchildComponent = componentRef;
    child.clickEvent.subscribe( () =>{
      ++this.count;
    });
  }

  unsubscribe(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
