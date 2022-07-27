import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
