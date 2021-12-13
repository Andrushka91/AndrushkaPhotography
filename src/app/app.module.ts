import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { ContainerPhotosComponent } from './components/container-photos/container-photos.component';
import { SearchComponent } from './components/search/search.component';
 
 
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopBarComponent,
    ContainerPhotosComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
