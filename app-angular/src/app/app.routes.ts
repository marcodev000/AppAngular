import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MiguelBazalduaComponent } from './miguel-bazaldua/miguel-bazaldua.component';
import { MarcoSanchezComponent } from './pages/marco-sanchez/marco-sanchez.component';
import { OscarRodarteComponent } from './oscar-rodarte/oscar-rodarte.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'miguel-bazaldua', component: MiguelBazalduaComponent },
  {path: 'marco-sanchez', component: MarcoSanchezComponent},
  {path: 'oscar-rodarte', component: OscarRodarteComponent}
];
