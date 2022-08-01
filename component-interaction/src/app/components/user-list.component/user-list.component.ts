import { Component, OnInit } from "@angular/core";

import { UserModel } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: "user-list",
	templateUrl: "./user-list.component.html",
	styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
	public users?: UserModel[];

	public constructor(private userService: UserService) { }

	public ngOnInit(): void {
		this.users = this.userService.getUsers();
	}

	public addUser(): void {
		let email = prompt("Enter Your Email");
		if (!email) { // deoarece prompt poate intoarce null, asignez empty
			email = "";   // string in acest caz pentru a nu avea erori
		}                // in cazul in care avem empty string, user-ul nu va fi creat si se va afisa o alerta
		let name = prompt("Enter Your Name");
		if (!name) {
			name = "";
		}
		if (email.length === 0 || name.length === 0) {
			alert("The New User Could Not Be Added");
			return;
		}
		const newUser: UserModel = {
			"email": email,
			"dateOfBirth": new Date(),
			"name": name
		};
		this.userService.addUser(newUser);

	}


}