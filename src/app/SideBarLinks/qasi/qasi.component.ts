import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qasi',
  templateUrl: './qasi.component.html',
  styleUrls: ['./qasi.component.css']
})
export class QASIComponent implements OnInit {

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
