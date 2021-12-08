import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objective-and-goals',
  templateUrl: './objective-and-goals.component.html',
  styleUrls: ['./objective-and-goals.component.css']
})
export class ObjectiveAndGoalsComponent implements OnInit {

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
