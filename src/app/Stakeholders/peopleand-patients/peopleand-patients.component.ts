import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peopleand-patients',
  templateUrl: './peopleand-patients.component.html',
  styleUrls: ['./peopleand-patients.component.css']
})
export class PeopleandPatientsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  registerYourSite(){
    window.open('https://n8dchycsbzy.typeform.com/to/SgaWNL9P', "_blank");
  }
  getinvolved(){
    window.open('https://n8dchycsbzy.typeform.com/to/JweGrnr9', "_blank");
  }
}
