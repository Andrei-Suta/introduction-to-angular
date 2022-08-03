import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DogService } from "src/app/services/dog.service";

@Component({
	selector: "breed-page",
	templateUrl: "./breed-page.component.html",
	styleUrls: ["./breed-page.component.css"]
})
export class BreedPageComponent implements OnInit {
	public breedName: string = "";
	public imageURL?: string;
	public errorMessage?: string;
	public subBreedsNames?: any;

	public constructor(
		private dogService: DogService,
		private route: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.breedName = this.route.snapshot.paramMap.get("name") + "";
		this.dogService.getBreedImage(this.breedName).subscribe(
			(image) => this.imageURL = image.message,
			(err) => this.errorMessage = err
		);
		this.dogService.getSubBreeds(this.breedName).subscribe(
			(breeds) => this.subBreedsNames = breeds.message,
			(err) => this.errorMessage = err
		);
	}
}