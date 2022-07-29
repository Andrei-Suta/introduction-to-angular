import { Component, OnInit } from "@angular/core";

import { UserModel } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "user-list",
    templateUrl: "./user-list.component.html",
    styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit{
    public users?: UserModel[];

    constructor(private userService: UserService){}
    ngOnInit(): void {
        this.users = this.userService.getUsers();
    }

}