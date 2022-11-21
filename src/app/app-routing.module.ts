import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:"", component: UsersComponent, pathMatch:'full'},
  {path:'perfil/:id', component: PerfilComponent},
  {path:'publicacion/:id', component: PublicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
