import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psci',
  templateUrl: './psci.component.html',
  styleUrls: ['./psci.component.css']
})
export class PSCIComponent implements OnInit {

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
