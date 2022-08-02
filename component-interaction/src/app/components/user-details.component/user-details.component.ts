import { Component, Input, OnInit } from "@angular/core";

import { UserModel } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
	selector: "user-details",
	templateUrl: "./user-details.component.html",
	styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent {
	@Input()
	public user?: UserModel;

	public constructor(private userService: UserService) { }

	public deleteUser(email: string | undefined): void {
		this.userService.deleteUser(email);
	}

}