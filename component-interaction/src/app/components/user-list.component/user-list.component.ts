import { Component, OnInit } from "@angular/core";

import { UserModel } from "src/app/models/user.model";

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})

export class UserListComponent{
    users: UserModel[] = [
        {
            "email": 'alex.ionescu@gmail.com',
            "dateOfBirth": new Date("2009-03-02"),
            "name": "Alex Ionescu"
        },
        {
            "email": "mihai.poepscu@gmail.com",
            "dateOfBirth": new Date("2000-11-25"),
            "name": "Mihai Popescu"
        },
        {
            "email": "andrei.constantinescu@gmail.com",
            "dateOfBirth": new Date("1995-07-25"),
            "name": "Andrei Constantinescu"
        },
        {
            "email": "bogdan.niculescu@gmail.com",
            "dateOfBirth": new Date("2005-10-11"),
            "name": "Bogdan Niculescu"
        },
    ];

}