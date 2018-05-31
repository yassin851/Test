import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { InterfaceComponent } from './interface/interface.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [{
 

  path: 'interface',
  component: InterfaceComponent,
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: '**',
  redirectTo: 'home'
}



];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InterfaceComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
