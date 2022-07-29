import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "userAge"})
export class UserAgePipe implements PipeTransform{
    public transform(date: Date): number{
        let timeDiff = Math.abs(Date.now() - date.getTime());
        return Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);       
    }
}