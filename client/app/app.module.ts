import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import { EntrepriseService } from './services/entreprise.service';

import { AuthGuardLogin } from './services/auth-guard-login.service';
import { AuthGuardAdmin } from './services/auth-guard-admin.service';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';

import { EntreprisesPalmaresComponent } from './entreprises_palmares/entreprises-palmares.component';
import { EntreprisePageComponent } from './entreprise_page/entreprise-page.component';
import { StagesRechercheComponent } from './stages_recherche/stages-recherche.component';
import { StagesResultatComponent } from './stages_resultat/stages-resultat.component';
import { ModifierProfilComponent } from './modifier_profil/modifier-profil.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StageEnregistrementComponent } from './stage_enregistrement/stage-enregistrement.component';
import { EntretienEnregistrementComponent } from './entretien_enregistrement/entretien-enregistrement.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    AdminComponent,

    EntreprisesPalmaresComponent,
    EntreprisePageComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    StagesRechercheComponent,
    StagesResultatComponent,
    StageEnregistrementComponent,
    ModifierProfilComponent,
    EntretienEnregistrementComponent,
    TestComponent
  ],
  imports: [
    RoutingModule,
    SharedModule,
    ChartsModule
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    AuthGuardAdmin,
    CatService,
    UserService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
