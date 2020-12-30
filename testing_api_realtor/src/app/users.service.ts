import { Injectable } from '@angular/core';
//import the module http for url and Api access
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http : HttpClient ) { }
  
  //function for api excution
  getData(){
    //API Decleration
    //https://localhost:44331/locations
    //https://realtorapi.yellow-chips.com/locations
    //http://localhost:44331/locations
    //http://realtorapi.yellow-chips.com/locations
    //https://jsonplaceholder.typicode.com/todos
    let url = "https://jsonplaceholder.typicode.com/todos";//Working API change it to realtor api

    return this.http.get(url);
  }
}
//this file is exported to genratededcomponent.ts file