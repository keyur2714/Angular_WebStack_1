import { Component, OnInit } from '@angular/core';
import { EducationDetail } from './education-model';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationDetailList : EducationDetail[] = [];

  constructor() {
    console.log("Object Created...!");
   }

  ngOnInit() {
    console.log("Eduction Component Initialized...!");
    let education1 = new EducationDetail();
    education1.qualification = 'S.S.C';
    education1.yearOfPassing = 2001;
    education1.per = 72.14;

    let education2 = new EducationDetail();
    education2.qualification = 'H.S.C';
    education2.yearOfPassing = 2003;
    education2.per = 66.50;

    let education3 = new EducationDetail();
    education3.qualification = 'B-Tech';
    education3.yearOfPassing = 2007;
    education3.per = 75.60;

    this.educationDetailList.push(education1);
    this.educationDetailList.push(education2);
    this.educationDetailList.push(education3);
  }

}
