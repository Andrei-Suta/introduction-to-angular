import { Component, Input } from "@angular/core";
import { UserModel } from "src/app/models/userModel";

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ["./user-details.component.css"]
})

export class UserDetailsComponent{
    @Input() usersList: any;
}