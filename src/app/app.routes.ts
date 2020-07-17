import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';



export const ROUTES: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'search', component: SearchComponent },
   { path: '', pathMatch: 'full', redirectTo: 'home'},
   { path: '**', pathMatch: 'full', redirectTo: 'home'}
];