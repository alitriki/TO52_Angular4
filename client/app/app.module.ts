import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { RoutingModule } from './routing.module';
import { SharedModule } from './shared/shared.module';
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
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

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
    AcceuilComponent,
    StagesRechercheComponent,
    StagesResultatComponent,
    ModifierProfilComponent
  ],
  imports: [
    RoutingModule,
    SharedModule
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
