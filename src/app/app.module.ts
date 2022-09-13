import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeycloakService } from './services/keycloak.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

export function kcFactory(keycloak: KeycloakService) {
  return () => keycloak.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: APP_INITIALIZER, deps:[KeycloakService], useFactory: kcFactory, multi:true},
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: KeycloakHttpInterceptorService,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
