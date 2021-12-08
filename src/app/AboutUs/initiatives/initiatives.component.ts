import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initiatives',
  templateUrl: './initiatives.component.html',
  styleUrls: ['./initiatives.component.css']
})
export class InitiativesComponent implements OnInit {

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
