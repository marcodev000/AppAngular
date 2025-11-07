import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { MiguelBazalduaComponent } from './miguel-bazaldua/miguel-bazaldua.component';

export const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'miguel-bazaldua', component: MiguelBazalduaComponent }
];
