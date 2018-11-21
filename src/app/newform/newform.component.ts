import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-newform',
  template: `
            <h2>Welcome {{myName}}</h2>
            
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
  
  constructor() { }

  ngOnInit() {


  }
}