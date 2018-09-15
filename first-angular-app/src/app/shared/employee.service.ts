import { Injectable } from "@angular/core";
import {Http,Response} from '@angular/http';
import { IEmployee } from "./IEmployee";
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService{

    serviceUrl:string="http://localhost:53415/api/employee";
    constructor(private _httpClient:Http){

    }

    getEmployees():Observable<IEmployee[]>{

 return this._httpClient.get(this.serviceUrl)
 .map((response:Response)=><IEmployee[]>response.json())
 .catch(this.handleError);
    }

    getEmployeeById(code:string):Observable<any>{
        var url = this.serviceUrl+"/"+code;
        return this._httpClient.get(url).map((response:Response)=>response.json() as any);
        
    }
    handleError(error:Response){
        console.log(error);
        return Observable.throw(error);
    }
}

          
