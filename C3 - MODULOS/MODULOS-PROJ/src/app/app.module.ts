import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ListaModule} from './lista/lista.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
