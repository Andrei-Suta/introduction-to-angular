import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserDetailsComponent } from "./components/user-details.component/user-details.component";
import { UserListComponent } from "./components/user-list.component/user-list.component";
import { AboutComponent } from "./pages/about.component";
import { NotFoundComponent } from "./pages/not-found.component";
import { UserComponent } from "./pages/user.component";
import { IsAdultPipe } from "./pipes/is-adult.pipe";
import { UserAgePipe } from "./pipes/user-age.pipe";

@NgModule({
  declarations: [
    AppComponent,
    IsAdultPipe,
    UserAgePipe,
    UserDetailsComponent,
    UserListComponent,
    AboutComponent,
    NotFoundComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
