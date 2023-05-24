import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headerss = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': 'KRhirfsdds@mpr'
  });

  urlLink = 'http://localhost:3000/users';

  constructor(private _http:HttpClient) { }

  getData(){
    return this._http.get<Array<Users>>(this.urlLink,{responseType:'json', headers:this.headerss});
  }

  addData(body){
    return this._http.post(this.urlLink,body);
  }

  editData(body){
    return this._http.put(`${this.urlLink}/${body.id}`,body);
  }

  delete(body){
    return this._http.delete(`${this.urlLink}/${body.id}`);
  }
}

export class Users{
  id:number;
  userName:string;
  password:string;
  role:string = "define";
  token:string;
  isActive:boolean = true;
}
