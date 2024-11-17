import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { ModalComponent } from './components/modal/modal.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ItemEstoqueComponent } from './components/item-estoque/item-estoque.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { ModalItemComponent } from './components/modal-item/modal-item.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    EstoqueComponent,
    ModalComponent,
    ItemEstoqueComponent,
    ModalItemComponent,
    LandingPageComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
