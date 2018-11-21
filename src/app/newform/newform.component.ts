import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-newform',
  template: `<h2 [class] = "h2class">
              Welcome {{myName}}
            </h2>
            <br>
            <!-- In case of both class and class binding class binding take prefference  -->
            <h2 class = "text-special" [class] = "h2class">Welcome Home
            </h2>
            <h2 class = "text-danger">
              Codevolution
            </h2>
            <!-- You can select you class with a boolean expressin like this.  -->
            <h2 [class.text-special]=mycall>
              Codevolution
              </h2>
              <!-- If you want to conditionally apply multiple classes then use ngClass directive.  -->
              <h2 [ngClass]=messageClasses>
                Codevolution
                </h2>`,
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
  public h2class;
  public mycall=true;
  constructor() { }

  public isSpecial = false;
  public messageClasses = {
    "text-success": !this.isSpecial,
    "text-special":this.isSpecial,
    "text-danger":!this.isSpecial
    
  }
  ngOnInit() {
    if (this.myName = "Pradeep Singh") {
      this.h2class = "text-success";
    } else {
      this.h2class = "text-danger";
    }


  }