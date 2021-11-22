import { Component, Injectable, Input, OnInit } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-get-involved-form',
  templateUrl: './get-involved-form.component.html',
  styleUrls: ['./get-involved-form.component.css']
})
export class GetInvolvedFormComponent implements OnInit {
  @Input() PersonDetails = { 
    Name : "",
    Email:"",
    Message:"",
  }
  constructor() { }

  ngOnInit(): void {}
  getInvolved(PersonDetails: any) {
    axios.post('http://localhost:1337/registration-forms', PersonDetails).then(response => {
      console.log(response);
      // localhost
      // 192.168.18.141 for testing at hamza ip
    });
  }

}
