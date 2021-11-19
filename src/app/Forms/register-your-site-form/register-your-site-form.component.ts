import { Component, Injectable, Input, OnInit } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-register-your-site-form',
  templateUrl: './register-your-site-form.component.html',
  styleUrls: ['./register-your-site-form.component.css']
})
export class RegisterYourSiteFormComponent implements OnInit {

  @Input() siteDetails = { 
    organizationName: "",
    companyName: "",
    Country: "",
    State: "",
    City: "",
    PostalCOde: "",
    FirstName: "",
    LastName: "",
    PrimaryContactNumber: 0,
    PrimaryContactTitle: "",
    PrimaryContactPhoneNumber: 0,
    stageofResearchInvolvment: ""
  }

  constructor() { }

  ngOnInit(): void {}
  registerYourSite(siteDetails: any) {
    axios.post('http://localhost:1337/registration-forms', siteDetails).then(response => {
      console.log(response);
    });
  }
}
