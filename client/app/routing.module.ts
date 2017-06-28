import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AdminComponent } from './admin/admin.component';

import { EntreprisesPalmaresComponent } from './entreprises_palmares/entreprises-palmares.component';
import { EntreprisePageComponent } from './entreprise_page/entreprise-page.component';
import { StagesRechercheComponent } from './stages_recherche/stages-recherche.component';
import { StagesResultatComponent } from './stages_resultat/stages-resultat.component';
import { ModifierProfilComponent } from './modifier_profil/modifier-profil.component';
import { StageEnregistrementComponent } from './stage_enregistrement/stage-enregistrement.component';
import { EntretienEnregistrementComponent } from './entretien_enregistrement/entretien-enregistrement.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: '', component: AccueilComponent, canActivate: [AuthGuardLogin] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'account', component: AccountComponent, canActivate: [AuthGuardLogin] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardAdmin] },
  { path: 'test', component: TestComponent, canActivate: [AuthGuardAdmin] },

  { path: 'entreprises_palmares', component: EntreprisesPalmaresComponent, canActivate: [AuthGuardLogin] },
  { path: 'entreprise/:id', component: EntreprisePageComponent, canActivate: [AuthGuardLogin] },
  { path: 'stages_recherche', component: StagesRechercheComponent, canActivate: [AuthGuardLogin] },
  { path: 'stages_resultat', component: StagesResultatComponent, canActivate: [AuthGuardLogin] },
  { path: 'stages_resultat/:criteres', component: StagesResultatComponent, canActivate: [AuthGuardLogin] },
  { path: 'modifier_profil', component: ModifierProfilComponent, canActivate: [AuthGuardLogin] },
  { path: 'stage_enregistrement', component: StageEnregistrementComponent, canActivate: [AuthGuardLogin] },
  { path: 'entretien_enregistrement', component: EntretienEnregistrementComponent, canActivate: [AuthGuardLogin] },
  { path: 'accueil', component: AccueilComponent, canActivate: [AuthGuardLogin] },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', redirectTo: 'accueil'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
