import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geri',
  templateUrl: './geri.component.html',
  styleUrls: ['./geri.component.css']
})
export class GERIComponent implements OnInit {

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
