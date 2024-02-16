import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 readonly APIUrl = "http://localhost:53218/api";
 readonly PhotoUrl = "http://localhost:53218/api/Photos";
  constructor(private http:HttpClient) { }
    getDepList() : Observable<any[]>
    {
      return this.http.get<any>(this.APIUrl+'/department');
    }
    addDepartment(val:any)
    {
      return this.http.post(this.APIUrl+'/department',val);
    }
    updateDepartment(val:any)
    {
      return this.http.put(this.APIUrl+'/department',val);
    }
    deleteDepartment(val:any)
    {
      return this.http.delete(this.APIUrl+'/department/'+val);
    }


    getEmpList() : Observable<any[]>
    {
      return this.http.get<any>(this.APIUrl+'/Employee');
    }
    addEmployee(val:any)
    {
      return this.http.post(this.APIUrl+'/Employee',val);
    }
    updateEmployee(val:any)
    {
      return this.http.put(this.APIUrl+'/Employee',val);
    }
    deleteEmployee(val:any)
    {
      return this.http.delete(this.APIUrl+'/Employee/'+val);
    }

    UploadPhoto(val:any)
    {
      return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
    }

    getAllDepartmentNames ():Observable<any[]>
    {
      return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
    }
}
