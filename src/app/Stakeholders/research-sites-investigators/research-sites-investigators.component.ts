import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-sites-investigators',
  templateUrl: './research-sites-investigators.component.html',
  styleUrls: ['./research-sites-investigators.component.css']
})
export class ResearchSitesInvestigatorsComponent implements OnInit {

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
