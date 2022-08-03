import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ImageDTO } from "src/app/models/image.model";
import { DogService } from "src/app/services/dog.service";

@Component({
	selector: "breed-page",
	templateUrl: "./breed-page.component.html",
	styleUrls: ["./breed-page.component.css"]
})
export class BreedPageComponent implements OnInit {
	public breed?: string;
	public image?: string;
	public errorMessage?: string;
	public subscriptionImage?: Subscription;
	public subscriptionSubBreeds?: Subscription;
	public subBreeds?: any;

	public constructor(private dogService: DogService, private route: ActivatedRoute) { }

	public ngOnInit(): void {
		this.breed = this.route.snapshot.paramMap.get("name") + "";
		this.subscriptionImage = this.dogService.getBreedImage(this.breed).subscribe({
			next: image => this.image = image.message,
			error: err => this.errorMessage = err
		});
		this.subscriptionSubBreeds = this.dogService.getSubBreeds(this.breed).subscribe({
			next: breeds => this.subBreeds = breeds.message,
			error: err => this.errorMessage = err
		});
	}
}