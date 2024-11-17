import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'estoque', component: EstoqueComponent},
    { path: 'home', component: LandingPageComponent},
    { path: 'login', component: LoginComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
