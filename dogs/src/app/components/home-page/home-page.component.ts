import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";

import { BreedModel } from "src/app/models/breed.model";
import { DogService } from "src/app/services/dog.service";

@Component({
	selector: "home-page",
	templateUrl: "./home-page.component.html",
	styleUrls: ["./home-page.component.css"]
})
export class HomeComponent implements OnInit {
	public breeds?: BreedModel;
	public subscription?: Subscription;
	public errorMessage?: string;

	constructor(private dogService: DogService) { }

	public ngOnInit(): void {
		this.subscription = this.dogService.getAllBreeds().subscribe({
			next: breed => this.breeds = breed,
			error: err => this.errorMessage = err
		});
		console.log(this.breeds);
	}
}