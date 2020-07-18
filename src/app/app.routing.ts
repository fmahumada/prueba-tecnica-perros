import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { HomeComponent } from './components/home/home.component';
import { AddDogsComponent } from './components/add-dogs/add-dogs.component';
import { GetDogsComponent } from './components/get-dogs/get-dogs.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'add-dogs', component: AddDogsComponent},
  {path: 'get-dogs/:breed', component: GetDogsComponent}
];

export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
