import { Component, OnInit } from '@angular/core';
import { ToastComponent } from '../shared/toast/toast.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.component.html',
  styleUrls: ['./modifier-profil.component.css']
})
export class ModifierProfilComponent implements OnInit {

  user = {};
  isLoading = true;

  constructor(private auth: AuthService,
              private router: Router,
              public toast: ToastComponent,
              private userService: UserService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUser(this.auth.currentUser).subscribe(
      //this.user.date_naissance => moment().format('YYYY-MM-DD') = this.user.date_naissance,
      data => this.user = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  cancelEditing() {
    this.user = {};
    this.toast.setMessage('Mise à jour annulée.', 'warning');
    // reload the user to reset the editing
    this.getUser();
  }

  editUser(user) {
    this.userService.editUser(user).subscribe(
      res => {
        this.user=user;
        this.toast.setMessage('Mise à jour effectuée !', 'success');
      },
      error => console.log(error)
    );
  }
  //
  // setSexe(S){
  //   this.user.sexe = S;
  // }

}
