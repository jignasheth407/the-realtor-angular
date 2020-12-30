
import { Component } from '@angular/core';
//import the usersserveice file for function of API
import { UsersService } from '../users.service';

@Component({
  selector: 'app-genratecomponent',
  templateUrl: './genratecomponent.component.html',
  styleUrls: ['./genratecomponent.component.css']
})

export class GenratecomponentComponent {

   apidata :any =[];//decleration of variable with array type for API Data store
   score=1;

   //accessing the userservice instnce
  constructor(private htt : UsersService ) {
    //getting in function to for excuting data of API
    this.htt.getData().subscribe(data=>{
      console.warn(data);//for printing in console
      //passing data in array
       this.apidata = data;
    })
   }

  
  }
//excuting the data in html file genratecomponent.component.html
