import { Component, OnInit } from '@angular/core';
import { KeycloakService } from './services/keycloak.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'westeros';
  isLoggedIn = false;
  constructor(private keycloak: KeycloakService) {} 

  public async ngOnInit(){
    this.isLoggedIn = await this.keycloak.kc?.authenticated;
    if (this.isLoggedIn) {
      console.log('Login Success');
      console.log(`Token : ${this.keycloak.kc?.token}`);
      console.log(`Token : ${this.keycloak.kc?.token}`);
    }
  }

  onLogin() {
    this.keycloak.kc.login();
  }

  onLogout() {
    this.keycloak.kc.logout();
  }

  loadAccount() {
    this.keycloak.kc.accountManagement();
  }

  isNobleHouse() {
    return this.keycloak.kc.hasResourceRole('nobleHouse','web-ui');
  }
}
