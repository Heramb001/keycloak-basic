import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  public kc: any;

  constructor(private http:HttpClient) { }

  public async init(){
    console.log('Security Initialization...');
    this.kc = new Keycloak({
      url: 'https://localhost:8443',
      realm: 'IAM',
      clientId: 'web-ui'
    });
    await this.kc.init({
      // onload: 'login-required',
      onload: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
    });
    // const authenticated = this.kc.authenticated;
    // if(!authenticated){
    //   this.kc.login();
    // }
  }
}
