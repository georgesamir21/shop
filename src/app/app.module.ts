import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { Bootstrap4Module } from 'bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Bootstrap4Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
