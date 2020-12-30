import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    //template : "<h1> datamaupulation </h1>",//cant name templeturl occer error's
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private router : Router ){}
        title = 'practice';
        coredata = "this data is from ts file by passing variable with data";
        // var error = " this will gave an error in console ";

        val() {//function declaration
          var a = "this is function value";
          return a;
          // return "this is function value";//this will print the same value 
        }

        object = {//object creation
                  val : "rohit",//string variable
                  addres : function(){//function declartaion
                          var houseno = "b/m106 shivaji nagar pithampur,distdhar";//variable return
                          return houseno; 
                        },
                  picode : 454775,//numaricvalue retrun
                }
        url = window.location.href;//toprint the current url value same thing doesn't work on html page/component

        arr = ["health&fitness","travelling"]; //to print value of array

        num1 = 100;//for artithamic opration
        num2 = 200;
        num3 = this.num2 - this.num1;//to access the same class variable

        clickMessage = '';

        onClickMe() {
          this.clickMessage = 'You are my hero!';
        }

        values = '';

        onKey(event: any) { // without type info
          this.values += event.target.value + ' | ';
        }

        eve(p : string){
          alert(p);
        }

        prorpertybinding = "this is from property binding..!!";

        componentbinding = "this data is from component binding";

        imgpath = "https://angular.io/assets/images/logos/angular/angular.svg";

        clasgrn = "greenclas";

        isdisable= true;

        edit(){
          this.isdisable = false;
        };

        data= [
          {
            name : "rohit mahajan",
            position: "MEANStack developer",
            contect : 123456, 
          },
          {
            name : "akash chakrader",
            position: "PHP developer",
            contect : 123456, 
          },
          {
            name : "navneet sharma",
            position: "MERNStack developer",
            contect : 123456, 
          },
        ];

        login =true;

      choice= "";
      selec(event: any) { 
        this.choice =event.target.value;
      }

      user ="admi";
      register = false;
      score=15;
      passed = "pass";

      employee=[
        {
          name :'rohit',
          position : 'mean development',
          hobbies :["health&fitness","travelling","foddie"],
          sal : 20000,
          gender : "male"
        },
        {
          name :'navneet',
          position : 'mern development',
          hobbies :["swiemming","foddie"],
          sal : 20000,
          gender : "male"
        },
      ];
     
      showdata(){
        this.employee=[
          {
            name :'rohit',
            position : 'MEAN development',
            hobbies :["health&fitness","travelling","foddie"],
            sal : 20000,
            gender : "male"
          },
          {
            name :'navneet',
            position : 'mern development',
            hobbies :["swiemming","foddie"],
            sal : 20000,
            gender : "male"
          },
          {
            name :'chanchal',
            position : 'wordpress development',
            hobbies :["coding","foddie"],
            sal : 20000,
            gender : "female"
          },
          {
            name :'akash',
            position : 'php development',
            hobbies :["coding","foddie"],
            sal : 20000,
            gender : "male"
          },
          {
            name :'rakesh',
            position : 'php development',
            hobbies :["smoking"],
            sal : 20000,
            gender : "male"
          },
        ];
      }

      treck(employee:any){
         return employee.name;
      }

      time = Date.now()

      Onclickredirect(){
        this.router.navigate(['/registration']);
      }
}




