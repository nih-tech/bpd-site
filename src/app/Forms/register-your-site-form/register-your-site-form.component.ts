import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-your-site-form',
  templateUrl: './register-your-site-form.component.html',
  styleUrls: ['./register-your-site-form.component.css']
})
export class RegisterYourSiteFormComponent{
  Register()
  {
    console.log("Hello world")
  }
  constructor() { }

  ngOnInit(): void {
  }
  // onRegister(){
  //   alert("Hello world")
  // }
  
}
