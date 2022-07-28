import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './components/user-details.component/user-details.component';
import { UserListComponent } from './components/user-list.component/user-list.component';
import { IsAdultPipe } from './pipes/is-adult.pipe';
import { UserAgePipe } from './pipes/user-age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserListComponent,
    IsAdultPipe,
    UserAgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
