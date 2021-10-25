import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CROCMOsComponent } from './Stakeholders/crocmos/crocmos.component';
import { IndexComponent } from './index/index.component';
import { InvestorsIncludingTaxPyaersComponent } from './Stakeholders/investors-including-tax-pyaers/investors-including-tax-pyaers.component';
import { PeopleandPatientsComponent } from './Stakeholders/peopleand-patients/peopleand-patients.component';
import { ResearchSitesInvestigatorsComponent } from './Stakeholders/research-sites-investigators/research-sites-investigators.component';
import { ServiceProvidersComponent } from './Stakeholders/service-providers/service-providers.component';
import { SponsersComponent } from './Stakeholders/sponsers/sponsers.component';
import { EthicsCommiteeeComponent } from './Stakeholders/ethics-commiteee/ethics-commiteee.component';
import { ClinicalTrialsComponent } from './Events/clinical-trials/clinical-trials.component';
import { AlliesComponent } from './Events/allies/allies.component';
import { VisionandMissionComponent } from './AboutUs/visionand-mission/visionand-mission.component';
import { OurTeamComponent } from './AboutUs/our-team/our-team.component';
import { CurrentProjectsComponent } from './Knowledge/current-projects/current-projects.component';
import { PublicationsComponent } from './Knowledge/publications/publications.component';
import { ArticlesComponent } from './Knowledge/articles/articles.component';
import { ArticlesAboutCTUComponent } from './Press/articles-about-ctu/articles-about-ctu.component';
import { InterviewsComponent } from './Press/interviews/interviews.component';
import { PressReleasesComponent } from './Press/press-releases/press-releases.component';
import { ObjectiveAndGoalsComponent } from './AboutUs/objective-and-goals/objective-and-goals.component';
import { GovernmentAndRegulatoryAgenciesComponent } from './Stakeholders/government-and-regulatory-agencies/government-and-regulatory-agencies.component';
import { NIHCTUAllienceComponent } from './AboutUs/nih-ctu-allience/nih-ctu-allience.component';
import { InitiativesComponent } from './AboutUs/initiatives/initiatives.component';
import { SiteAcrediationComponent } from './AboutUs/site-acrediation/site-acrediation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { GetInvolvedFormComponent } from './Forms/get-involved-form/get-involved-form.component';
import { RegisterYourSiteFormComponent } from './Forms/register-your-site-form/register-your-site-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CROCMOsComponent,
    IndexComponent,
    InvestorsIncludingTaxPyaersComponent,
    PeopleandPatientsComponent,
    ResearchSitesInvestigatorsComponent,
    ServiceProvidersComponent,
    SponsersComponent,
    EthicsCommiteeeComponent,
    ClinicalTrialsComponent,
    AlliesComponent,
    VisionandMissionComponent,
    OurTeamComponent,
    CurrentProjectsComponent,
    PublicationsComponent,
    ArticlesComponent,
    ArticlesAboutCTUComponent,
    InterviewsComponent,
    PressReleasesComponent,
    ObjectiveAndGoalsComponent,
    GovernmentAndRegulatoryAgenciesComponent,
    NIHCTUAllienceComponent,
    InitiativesComponent,
    SiteAcrediationComponent,
    GetInvolvedFormComponent,
    RegisterYourSiteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Specify your library as an import
    SlickCarouselModule,
    NoopAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
