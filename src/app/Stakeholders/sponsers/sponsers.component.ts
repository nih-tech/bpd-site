import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsers',
  templateUrl: './sponsers.component.html',
  styleUrls: ['./sponsers.component.css']
})
export class SponsersComponent implements OnInit {

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
