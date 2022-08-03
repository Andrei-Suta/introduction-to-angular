import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BreedPageComponent } from "./components/breed-page/breed-page.component";
import { HomeComponent } from "./components/home-page/home-page.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
	{ path: "", component: HomeComponent },
	{ path: "breed/:name", component: BreedPageComponent },
	{ path: "**", component: NotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
