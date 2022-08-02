import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { UserModel } from "../models/user.model";
import { UserService } from "../services/user.service";

@Component({
	selector: "user",
	templateUrl: "./user.component.html",
	styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
	public constructor(private userService: UserService, private route: ActivatedRoute) { }
	public user: UserModel = {
		"email": "andrei.suta@gmail.com",
		"name": "Andrei Suta",
		"dateOfBirth": new Date()
	}
	public ngOnInit(): void {
		this.user = this.userService.findUser(this.route.snapshot.params[1]);
	}

}