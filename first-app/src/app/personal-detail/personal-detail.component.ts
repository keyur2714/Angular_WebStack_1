import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstName : string = 'keyur';
  lastName : string = 'thakor';
  age : number = 31;
  dob : string = '27/12/1986';

  constructor() {
    console.log("Personal Details Object Created:...");
   }

  ngOnInit() {
    console.log("Personal Details Initialized:...");  
  }

}
