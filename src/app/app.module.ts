import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CROCMOsComponent } from './Stakeholders/crocmos/crocmos.component';
import { IndexComponent } from './index/index.component';
import { GovernmentanRegulatoryAgenciesComponent } from './Stakeholders/governmentan-regulatory-agencies/governmentan-regulatory-agencies.component';
import { InvestorsIncludingTaxPyaersComponent } from './Stakeholders/investors-including-tax-pyaers/investors-including-tax-pyaers.component';
import { PeopleandPatientsComponent } from './Stakeholders/peopleand-patients/peopleand-patients.component';
import { ResearchSitesInvestigatorsComponent } from './Stakeholders/research-sites-investigators/research-sites-investigators.component';
import { ServiceProvidersComponent } from './Stakeholders/service-providers/service-providers.component';
import { SponsersComponent } from './Stakeholders/sponsers/sponsers.component';
import { EthicsCommiteeeComponent } from './Stakeholders/ethics-commiteee/ethics-commiteee.component';
import { ClinicalTrialsComponent } from './Events/clinical-trials/clinical-trials.component';
import { AlliesComponent } from './Events/allies/allies.component';

@NgModule({
  declarations: [
    AppComponent,
    CROCMOsComponent,
    IndexComponent,
    GovernmentanRegulatoryAgenciesComponent,
    InvestorsIncludingTaxPyaersComponent,
    PeopleandPatientsComponent,
    ResearchSitesInvestigatorsComponent,
    ServiceProvidersComponent,
    SponsersComponent,
    EthicsCommiteeeComponent,
    ClinicalTrialsComponent,
    AlliesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
