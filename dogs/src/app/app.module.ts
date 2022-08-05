import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home-page/home-page.component";
import { AppRoutingModule } from "./app-routing.module";
import { BreedPageComponent } from "./components/breed-page/breed-page.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SubBreedPageComponent } from "./components/sub-breed-page/sub-breed-page.component";
import { RedirectHomeButtonComponent } from "./components/shared/redirect-home-button.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		BreedPageComponent,
		NotFoundComponent,
		SubBreedPageComponent,
		RedirectHomeButtonComponent
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
