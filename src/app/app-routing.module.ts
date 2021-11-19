import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CROCMOsComponent } from './Stakeholders/crocmos/crocmos.component';
import { IndexComponent } from './index/index.component';
import { EthicsCommiteeeComponent } from './Stakeholders/ethics-commiteee/ethics-commiteee.component';
import { InvestorsIncludingTaxPyaersComponent } from './Stakeholders/investors-including-tax-pyaers/investors-including-tax-pyaers.component';
import { PeopleandPatientsComponent } from './Stakeholders/peopleand-patients/peopleand-patients.component';
import { ResearchSitesInvestigatorsComponent } from './Stakeholders/research-sites-investigators/research-sites-investigators.component';
import { ServiceProvidersComponent } from './Stakeholders/service-providers/service-providers.component';
import { SponsersComponent } from './Stakeholders/sponsers/sponsers.component';
import { ArticlesAboutCTUComponent } from './Press/articles-about-ctu/articles-about-ctu.component';
import { InterviewsComponent } from './Press/interviews/interviews.component';
import { PressReleasesComponent } from './Press/press-releases/press-releases.component';
import { ArticlesComponent } from './Knowledge/articles/articles.component';
import { CurrentProjectsComponent } from './Knowledge/current-projects/current-projects.component';
import { PublicationsComponent } from './Knowledge/publications/publications.component';
import { AlliesComponent } from './Events/allies/allies.component';
import { ClinicalTrialsComponent } from './Events/clinical-trials/clinical-trials.component';
import { OurTeamComponent } from './AboutUs/our-team/our-team.component';
import { VisionandMissionComponent } from './AboutUs/visionand-mission/visionand-mission.component';
import { ObjectiveAndGoalsComponent } from './AboutUs/objective-and-goals/objective-and-goals.component';
import { GovernmentAndRegulatoryAgenciesComponent } from './Stakeholders/government-and-regulatory-agencies/government-and-regulatory-agencies.component';
import { InitiativesComponent } from './AboutUs/initiatives/initiatives.component';
import { NIHCTUAllienceComponent } from './AboutUs/nih-ctu-allience/nih-ctu-allience.component';
import { SiteAcrediationComponent } from './AboutUs/site-acrediation/site-acrediation.component';
import { GetInvolvedFormComponent } from './Forms/get-involved-form/get-involved-form.component';
import { RegisterYourSiteFormComponent } from './Forms/register-your-site-form/register-your-site-form.component';
import { KnowledgePageComponent } from './FooterPages/knowledge-page/knowledge-page.component';
import { TermsAndConditionComponent } from './FooterPages/terms-and-condition/terms-and-condition.component';
import { PrivacyPolicyComponent } from './FooterPages/privacy-policy/privacy-policy.component';
import { ContactUsComponent } from './FooterPages/contact-us/contact-us.component';
import { AboutUsPageComponent } from './FooterPages/about-us-page/about-us-page.component';
import { GERIComponent } from './SideBarLinks/geri/geri.component';
import { PSCIComponent } from './SideBarLinks/psci/psci.component';
import { QASIComponent } from './SideBarLinks/qasi/qasi.component';
import { SOQIComponent } from './SideBarLinks/soqi/soqi.component';
import { GlobalChangeComponent } from './SideBarLinks/global-change/global-change.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Index', pathMatch: 'full' }, // redirect to `first-componen
  // =====================Stakeholders Dropdown Paths=======================
  { path: 'CROCMOs', component: CROCMOsComponent },
  { path: 'Index', component: IndexComponent },
  { path: 'EthicsCommitte', component: EthicsCommiteeeComponent },
  { path: 'investors-including-tax-pyaers', component: InvestorsIncludingTaxPyaersComponent },
  { path: 'peopleand-patients', component: PeopleandPatientsComponent },
  { path: 'research-sites-investigators', component: ResearchSitesInvestigatorsComponent },
  { path: 'service-providers', component: ServiceProvidersComponent },
  { path: 'Government-and-Regulatory-Agencies', component: GovernmentAndRegulatoryAgenciesComponent },
  { path: 'Sponsers', component: SponsersComponent },
  // =====================About Us Dropdown Paths=======================
  { path: 'Objective-and-Goals', component: ObjectiveAndGoalsComponent },
  { path: 'Our-team', component: OurTeamComponent },
  { path: 'Vision-and-Mission', component: VisionandMissionComponent },
  { path: 'Initiatives', component: InitiativesComponent },
  { path: 'NIH-CTU-Allience', component: NIHCTUAllienceComponent },
  { path: 'Site-Acrediation', component: SiteAcrediationComponent },
  // =====================Press Dropdown Paths=======================
  { path: 'articles-about-ctu', component: ArticlesAboutCTUComponent },
  { path: 'interviews', component: InterviewsComponent },
  { path: 'press-releases', component: PressReleasesComponent },
  // =====================Knowledge Dropdown Paths=======================
  { path: 'Articles', component: ArticlesComponent },
  { path: 'CurrentProjects', component: CurrentProjectsComponent },
  { path: 'Publications', component: PublicationsComponent },
  // =====================Events Dropdown Paths=======================
  { path: 'Allies', component: AlliesComponent },
  { path: 'ClinicalTrials', component: ClinicalTrialsComponent },
  // =====================Forms=======================
  { path: 'get-involved-form', component: GetInvolvedFormComponent },
  { path: 'register-your-site-form', component: RegisterYourSiteFormComponent },
  // =====================Side Panel Links=======================
  { path: 'GERI', component: GERIComponent },
  { path: 'PSCI', component: PSCIComponent },
  { path: 'QASI', component: QASIComponent },
  { path: 'SOQI', component: SOQIComponent },
  { path: 'GlobalChange', component: GlobalChangeComponent },
  // =====================Footer Paths=======================
  { path: 'AboutUs', component: AboutUsPageComponent },
  { path: 'ContactUs', component: ContactUsComponent },
  { path: 'KnowledgePage', component: KnowledgePageComponent },
  { path: 'PrivacyPolicy', component: PrivacyPolicyComponent },
  { path: 'TermsandCondition', component: TermsAndConditionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
