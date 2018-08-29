import { PipeTransform, Pipe } from "../../../node_modules/@angular/core";


@Pipe({
    name:'employeeTitle'
})

export class EmployeeTitle implements PipeTransform {
    transform(employeeName: string, gender: string): string {
        if (gender.toLowerCase() == 'male') {
            return 'Mr.' + employeeName;
        }
        else {
            return 'Miss.' + employeeName;
        }
    }

}