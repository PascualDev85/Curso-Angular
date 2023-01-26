import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {
  ContactsDetailPageComponent,
  ContactsPageComponent,
  HomePageComponent,
  LoginPageComponent,
  NoutFoundPageComponent,
} from './pages';
// import { HomePageComponent } from './pages/home-page/home-page.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [
  {
    // cuando vaya a la raiz, redirecciona a home
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    // subrutas EJEMPLO (Desplegable)
    children: [
      {
        path: 'hijo',
        component: HomePageComponent,
      },
    ],
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/:id',
    component: ContactsDetailPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NoutFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
