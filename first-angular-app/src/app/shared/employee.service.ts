import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { IEmployee } from "./IEmployee";
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService{

    serviceUrl:string="http://localhost:53415/api/employee";
    constructor(private _httpClient:HttpClient){

    }

    getEmployees():IEmployee[]{

 //return this._httpClient.get(this.serviceUrl);

        return [
            { code: 'emp001', firstName: 'Tom', gender: 'Male', annualSalary: 5500,dateOfBirth:'06/25/2012' },
            { code: 'emp002', firstName: 'Alex', gender: 'Male', annualSalary: 10000 ,dateOfBirth:'12/2/2012'},
            { code: 'emp003', firstName: 'Marry', gender: 'Female', annualSalary: 20000,dateOfBirth:'11/30/2012' },
            { code: 'emp004', firstName: 'Mike', gender: 'Male', annualSalary: 5500,dateOfBirth:'10/14/2012' },
            { code: 'emp005', firstName: 'Nancy', gender: 'Female', annualSalary: 6000,dateOfBirth:'02/02/2012' },
            { code: 'emp006', firstName: 'Steve', gender: 'Male', annualSalary: 6000,dateOfBirth:'02/02/2012' }
          ];
          
    }

}