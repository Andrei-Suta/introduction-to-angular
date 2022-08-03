import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { BreedDTO } from "../models/breed.model";
import { ImageDTO } from "../models/image.model";


@Injectable({
	providedIn: "root",
})
export class DogService {
	private getBreedsURL = "https://dog.ceo/api/breeds/list/all";

	public constructor(private http: HttpClient) { }

	public getAllBreeds(): Observable<BreedDTO> {
		return this.http.get<BreedDTO>(this.getBreedsURL);
	}

	public getBreedImage(breed?: string): Observable<ImageDTO> {
		return this.http.get<ImageDTO>(`https://dog.ceo/api/breed/${breed}/images/random`);
	}

	public getSubBreedImage(breed?: string, subBreed?: string): Observable<ImageDTO> {
		return this.http.get<ImageDTO>(`https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`);
	}

	public getSubBreeds(breed?: string): Observable<BreedDTO> {
		return this.http.get<BreedDTO>(`https://dog.ceo/api/breed/${breed}/list`);
	}
}