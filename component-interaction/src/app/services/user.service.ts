import { Injectable } from "@angular/core";

import { UserModel } from "../models/user.model";

@Injectable({
	providedIn: "root",
})
export class UserService {
	private users: UserModel[] = [];

	public constructor() {
		this.users = [
			{
				"email": "alex.ionescu@gmail.com",
				"dateOfBirth": new Date("1996-03-02"),
				"name": "Alex Ionescu"
			},
			{
				"email": "andrei.constantinescu@gmail.com",
				"dateOfBirth": new Date("2000-07-05"),
				"name": "Andrei Constantinescu"
			},
			{
				"email": "bogdan.niculescu@gmail.com",
				"dateOfBirth": new Date("2009-11-12"),
				"name": "Bogdan Niculescu"
			}
		]
	}

	public getUsers(): UserModel[] {
		return this.users;
	}

	public addUser(user: UserModel): void {
		this.users.push(user);
	}

	public deleteUser(email: string | undefined): void {
		for (let user of this.users) {
			if (user.email === email) {
				this.users.splice(this.users.indexOf(user), 1);
				return;
			}
		}
	}

	public findUser(email: string): UserModel | undefined {
		for (let user of this.users) {
			if (user.email === email) {
				return user;
			}
		}
		return undefined;
	}

}