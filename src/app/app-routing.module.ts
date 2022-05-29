import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationComponent } from './declaration/declaration.component';
import { HomeComponent } from './home/home.component';
import { SweetheartComponent } from './sweetheart/sweetheart.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quer-namorar-comigo', component: SweetheartComponent},
  { path: 'declaration', component: DeclarationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
