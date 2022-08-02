import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UserDetailsComponent } from "./components/user-details.component/user-details.component";
import { UserListComponent } from "./components/user-list.component/user-list.component";
import { AboutComponent } from "./pages/about.component";
import { NotFoundComponent } from "./pages/not-found.component";
import { UserComponent } from "./pages/user.component";

const routes: Routes = [
{
  path: "about", component: AboutComponent
},
{
  path: "users", component: UserListComponent
},
{
  path: "user/:email", component: UserComponent
},
{
  path: "**", component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
