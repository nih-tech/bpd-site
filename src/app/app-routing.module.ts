import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{Router} from '@angular/router'
import { CROCMOsComponent } from './Stakeholders/crocmos/crocmos.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path:'CROCMOs' , component:CROCMOsComponent},
  {path:'Index' , component:IndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
