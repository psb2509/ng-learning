import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public myName = "Pradeep Singh";
public myAge = 31;
public isDisable = false ;
}
