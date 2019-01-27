import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProjectsComponent} from './projects/projects.component';

const routes: Routes = [
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: '' , component: HomeComponent},
  {path: 'about', component: AboutMeComponent},
  {path: 'projects', component: ProjectsComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
