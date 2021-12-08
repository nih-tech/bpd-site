import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-acrediation',
  templateUrl: './site-acrediation.component.html',
  styleUrls: ['./site-acrediation.component.css']
})
export class SiteAcrediationComponent implements OnInit {

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
