import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visionand-mission',
  templateUrl: './visionand-mission.component.html',
  styleUrls: ['./visionand-mission.component.css']
})
export class VisionandMissionComponent implements OnInit {

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
