import { Component, OnInit } from "@angular/core";
import { UserModel } from "src/app/models/userModel";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent{
    users: UserModel[]=[
        {
            "id": 1,
            "dateOfBirth": new Date("2009-03-02"),
            "name": "Alex Ionescu"
        },
        {
            "id": 1,
            "dateOfBirth": new Date("2000-11-25"),
            "name": "Mihai Popescu"
        },
        {
            "id": 1,
            "dateOfBirth": new Date("1995-07-25"),
            "name": "Andrei Constantinescu"
        },
        {
            "id": 1,
            "dateOfBirth": new Date("2005-10-11"),
            "name": "Bogdan Nicolaescu"
        },
    ];

}