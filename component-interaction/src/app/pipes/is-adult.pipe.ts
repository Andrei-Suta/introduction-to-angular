import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "isAdult"})
export class IsAdultPipe implements PipeTransform{
    public transform(age: number): boolean{
        return age > 18;
    }
}