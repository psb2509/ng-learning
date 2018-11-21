import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-newform',
  template: `
            <h2>Welcome {{myName}}</h2>
            <h2 [style.color]="'red'">Style Binding 1</h2>
            <h2 [style.color]="mycall ? 'Blue' : 'red'">Style Binding 2</h2> 
            <h2 [style.color]="mycall ? mycolor : 'red'">Style Binding 3</h2> 
            <h2 [ngStyle]="mycall ? myStyles :'' ">Style Binding 3</h2> 
            
            `,
  styles: [`
            .text-success { 
              color:green;
            } 
            .text-danger { 
              color:red;
            }
            .text-special { 
              font-style:italic;
  }
  `]
})
export class NewformComponent implements OnInit {
  public myName = "Pradeep Singh";
  public mycall = true;
  public mycolor = 'yellow';
  public myStyles = {
    'color': 'red',
    'font-style': 'italic'
};
  constructor() { }

  ngOnInit() {


  }
}