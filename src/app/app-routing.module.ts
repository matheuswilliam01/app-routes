import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AccountComponent } from './pages/account/account.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';

// Route -> Objeto que define uma rota
const routes: Routes = [
  // Objeto Route
  {
    path: "",
    pathMatch: "full", // full - garante que a rota esteja totalmente vazia
    redirectTo: "home" // Redireciona diretamente para a Home
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "dashboard",
    canActivate: [LoginGuard],
    children: [ // rotas filhas
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "account/:name",
        component: AccountComponent
      }
    ]
  },
  {
    path: "**", // Rota coringa = qualquer rota não definida, retorna para a Page Error.
    component: PageErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
