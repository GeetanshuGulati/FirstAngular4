import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RainbowDirective } from './rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    SigninComponent,
    DashboardComponent,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', redirectTo: '/welcome', pathMatch:"full"},
        { path: 'welcome', component: WelcomeComponent },
        { path: 'signin', component: SigninComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: '**', component: PageNotFoundComponent },
     ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
