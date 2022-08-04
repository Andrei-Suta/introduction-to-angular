import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { DogService } from "src/app/services/dog.service";

@Component({
	selector: "sub-breed-page",
	templateUrl: "./sub-breed-page.component.html",
	styleUrls: ["./sub-breed-page.component.css"]
})
export class SubBreedPageComponent implements OnInit {
	public breedName: string = "";
	public subBreedName: string = "";
	public imageURL?: string;
	public errorMessage: string = "";

	public constructor(
		private dogService: DogService,
		private activatedRoute: ActivatedRoute
	) { }

	public ngOnInit(): void {
		this.prepareNamesFromURL();
	}

	public prepareNamesFromURL(): void {
		this.breedName = this.activatedRoute.snapshot.paramMap.get("name") + "";
		this.subBreedName = this.activatedRoute.snapshot.paramMap.get("subbreed") + "";
		this.prepareImageURL(this.breedName, this.subBreedName);
	}

	public prepareImageURL(breedName: string, subBreedName: string): void {
		this.dogService.getSubBreedImage(this.breedName, this.subBreedName).subscribe(
			(imageURL) => this.imageURL = imageURL.message,
			(err) => this.errorMessage = err
		);
	}

}