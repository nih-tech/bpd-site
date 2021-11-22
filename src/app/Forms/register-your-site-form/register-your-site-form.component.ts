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
    companyWebsite: "",
    Country: "",
    State: "",
    City: "",
    PostalCode: "",
    StreetAddress:"",
    Address2:"",
    FirstName: "",
    LastName: "",
    Tittle:"",
    PrimaryContactName:"",
    PrimaryContactTittle: "",
    PrimaryContactPhone: 0,
    PrimaryContactEmailAddress:"",
    ListAnyPrimaryTheraputicAreas:"",
    StageOfResearchInvolvment: ""
  }

  constructor() { }

  ngOnInit(): void {}
  registerYourSite(siteDetails: any) {
    axios.post('http://localhost:1337/registration-forms', siteDetails).then(response => {
      console.log(response);
      // localhost
      // 192.168.18.141 for testing at hamza ip
    });
  }
}
