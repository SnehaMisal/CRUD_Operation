import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http: HttpClient) {
   }
   ProcedeLogin(inputdata:any){
    return this.http.post('https://fakestoreapi.com/auth/login',inputdata)
   }
}
