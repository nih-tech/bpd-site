import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soqi',
  templateUrl: './soqi.component.html',
  styleUrls: ['./soqi.component.css']
})
export class SOQIComponent implements OnInit {

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
