import { IEmployee } from "./IEmployee";

export class Employee implements IEmployee{

    computeMonthlySalary(annualSalary: number): number {
        return annualSalary/12;
    }

    constructor(public code: string, public firstName: string,public gender: string,public annualSalary: number,public dateOfBirth: string){

    }
}
