import { HomeComponent } from './home/home.component';

import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'home', component: HomeComponent, resolve: { 'animals': AnimalsService } },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent }
    
    // { path: 'about', component: AboutComponent },
    // { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }