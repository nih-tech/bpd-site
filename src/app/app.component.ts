import { Component } from '@angular/core';
import{Router}from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'CTU-NIH';

  constructor(private router:Router){}
  gotoCROCMOs(pageName:string):void{
    this.router.navigate(['`${pageName}'])
  }
}
// (function() {
//   "use strict";
//  /**
//    * Mobile nav toggle
//    */
//   on('click', '.mobile-nav-toggle', function(e : any) {
//     select('#navbar').classList.toggle('navbar-mobile')
//     this.classList.toggle('bi-list')
//     this.classList.toggle('bi-x')
//   })

//   /**
//    * Mobile nav dropdowns activate
//    */
//   on('click', '.navbar .dropdown > a', function(e: any) {
//     if (select('#navbar').classList.contains('navbar-mobile')) {
//       e.preventDefault()
//       this.nextElementSibling.classList.toggle('dropdown-active')
//     }
//   }, true)


// })();