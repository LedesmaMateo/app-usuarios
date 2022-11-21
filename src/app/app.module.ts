import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    PerfilComponent,
    PublicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
