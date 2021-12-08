import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-change',
  templateUrl: './global-change.component.html',
  styleUrls: ['./global-change.component.css']
})
export class GlobalChangeComponent implements OnInit {

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
