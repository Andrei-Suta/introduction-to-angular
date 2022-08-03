import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { BreedDTO } from "../models/breed.model";
import { Observable } from "rxjs";


@Injectable({
	providedIn: "root",
})
export class DogService {
	private getBreedsURL = "https://dog.ceo/api/breeds/list/all";

	public constructor(private http: HttpClient) { }

	public getAllBreeds(): Observable<BreedDTO> {
		return this.http.get<BreedDTO>(this.getBreedsURL);
	}
}