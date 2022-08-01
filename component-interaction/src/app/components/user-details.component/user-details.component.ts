import { Component, Input } from "@angular/core";

import { UserModel } from "src/app/models/user.model";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: "user-details",
    templateUrl: "./user-details.component.html",
    styleUrls: ["./user-details.component.css"]
})
export class UserDetailsComponent{
    @Input() 
    public user: UserModel = {
        "email": "alex.ionescu@gmail.com",
        "dateOfBirth": new Date("2009-03-02"),
        "name": "Alex Ionescu"
    }

    public constructor(private userService: UserService){}

    public deleteUser(email: string): void{
        this.userService.deleteUser(email);
    }
        
}