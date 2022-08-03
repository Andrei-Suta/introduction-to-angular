import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

import { BreedModel } from "../models/breed.model";
import { Observable } from "rxjs";



@Injectable({
	providedIn: "root",
})
export class DogService {
	private getBreedsURL = 'https://dog.ceo/api/breeds/list/all';
	constructor(private http: HttpClient) { }
	getAllBreeds(): Observable<BreedModel> {
		return this.http.get<BreedModel>(this.getBreedsURL);
	}
}