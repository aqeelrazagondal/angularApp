import { MyServiceService } from './service/my-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'


import { AppComponent } from './app.component';
import { SandboxComponent } from './componrnts/sandbox/sandbox.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componrnts/home/home.component';
import { AboutComponent } from './componrnts/about/about.component';
import { NavbarComponent } from './componrnts/navbar/navbar.component';
import { UserDetailsComponent } from './componrnts/user-details/user-details.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'user/:id',component:UserDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
