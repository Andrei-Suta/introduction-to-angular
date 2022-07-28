import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'isAdult'})

export class IsAdultPipe implements PipeTransform{
    public transform(date: Date): boolean{
        let timeDiff = Math.abs(Date.now() - date.getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
        return age > 18;
    }
}