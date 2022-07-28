import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'userAgePipe'})

export class UserAgePipe implements PipeTransform{
    transform(date: Date): number{
        let timeDiff = Math.abs(Date.now() - date.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
        return age;
    }
}