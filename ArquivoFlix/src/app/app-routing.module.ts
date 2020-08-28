import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarComponent } from './metodos/adicionar/adicionar.component';
import { EditarComponent } from './metodos/editar/editar.component';
import { InfoComponent } from './info/info.component';
import { FiltrarComponent } from './metodos/filtrar/filtrar.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'adicionar', component: AdicionarComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: 'consultar/:id', component: InfoComponent },
  { path: 'filtrar/:id', component: FiltrarComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
