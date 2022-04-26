import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogItemComponent } from './dialog-item/dialog-item.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  public isMobile: boolean = false;

  constructor(
    breakpointObserver: BreakpointObserver, 
    public dialog: MatDialog) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }
  ngOnInit(): void {
  }

  addNewItem(){
    console.log("hey new item");
    this.dialog.open(DialogItemComponent,{
      height: '500px',
      width:'600px'
    });
    
  }
}
