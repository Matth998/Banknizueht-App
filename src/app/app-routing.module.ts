import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrentistasComponent } from './components/correntistas/correntistas.component';
import { HomeComponent } from './components/home/home.component';
import { MovimentacaoListComponent } from './components/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './components/movimentacao-new/movimentacao-new.component';

const routes: Routes = [

  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},
  {path: 'movimentacao-new', component: MovimentacaoNewComponent},
  {path: 'movimentacoes', component: MovimentacaoListComponent},
  {path: 'correntistas', component: CorrentistasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
