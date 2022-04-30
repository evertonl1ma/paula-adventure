import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SweetheartComponent } from './sweetheart/sweetheart.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'quer-namorar-comigo', component: SweetheartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
