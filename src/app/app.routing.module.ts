import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { HomeComponent } from './pages/home/home.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { LoginComponent } from './pages/login/login.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'contato', component: ContatoComponent },
	{ path: 'sobrenos', component: SobrenosComponent },
	{ path: 'login', component: LoginComponent }

];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]

})

export class AppRoutingModule {
	
}