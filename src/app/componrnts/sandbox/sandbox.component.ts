import { MyServiceService } from './../../service/my-service.service';
// import { Customer } from './Customer';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css']
})
export class SandboxComponent {
  users:any[];
  countries:any[];
  user = {
    id:'',
    name:'',
    email:'',
    phone:''
  };
  isEdit:boolean = false;
  public errorMsg;

  constructor(public dataService:MyServiceService){
    this.dataService.getUsers()
      .subscribe(user => {
        this.users = user,
        error => {
          this.errorMsg = error;
          console.log('ERROR FROM CONSTRUCTOR' +this.errorMsg);
        };
    });

    this.dataService.getCuntryList()
      .subscribe(country => {
        this.countries = country,
        
        error => {
          this.errorMsg = error;
          console.log('ERROR FROM CONSTRUCTOR' +this.errorMsg);
        };
      })
  }

  onSubmit(isEdit){
    if(isEdit){
      this.dataService.updateUser(this.user).subscribe(user => {
        for(let i=0; i<this.users.length; i++){
          if(this.users[i].id == this.user.id){
            this.users.splice(i, 1);
          }
        }
        this.users.unshift(this.user);
      });
    }else {
      this.dataService.addUser(this.user).subscribe(user => {
        console.log(user);
        this.users.unshift(user);
      });
    }

  }

  onDeleteClick(id){
    console.log(id);
    this.dataService.deleteUser(id).subscribe(res => {
      // console.log(res);
      for(let i=0; i<this.users.length; i++){
        if(this.users[i].id == id){
          this.users.splice(i, 1);
        }
      }
    })
  }

  onEditClick(user){
    this.isEdit = true;
    this.user = user;
  }

  // data:any[] = [];

  // constructor(public dataService:MyServiceService){
  //   this.dataService.getData().subscribe(data => {
  //     // console.log(data);
  //     this.data.push(data);
  //   });
  // }

  // users:string[];

  // constructor(public dataService:MyServiceService){
  //   this.users = this.dataService.geyUsers();
  // }

  //   user = {
  //     name:'',
  //     email:'',
  //     phone:''
  // }

  // onSubmit({value, valid}){
  // if(valid){
  //     console.log(value);
  // } else {
  //     console.log('Form is invalid');
  // }
  // }

  // name:string = '';
  // users:string[] = ['Aqeel', 'Raza', 'Fahad', 'Aslam']

  // onSubmit(){
  //   // console.log(this.name);
  //   this.users.push(this.name);
  //   this.name = '';
  // }

  // name:string = '';
  // age:number = 0;

  // fireEvent(e){
  //   console.log(e.type);
  // }



  // text:string = 'Hello World'
  // value:boolean = true;

  // changeValue(){
  //   this.value = !this.value;
  //   this.value = false;
  //   this.text = 'GoodBye World';
  // }
  
  // fireEvent(e){
  //   // console.log('Button Clicked!!!');
  //   console.log(e.type); 
  // }
 
 
  // birthday = new Date(1981, 1 , 15);
  // total = 500;
  // fee = 10;
  
  
  // isSpecial = true;
  // canSave = true;
  // currentStyles =  {};
  
  // constructor(){
  //   this.setCurrentStyles();
  // }

  // setCurrentStyles(){
  //   this.currentStyles = {
  //     'font-style': this.canSave ? 'italic' : 'normal',
  //     'font-size': this.isSpecial ? '24px' : '12px'
  //   }
  // }


  // isSpecial = true;
  // canSave = true;
  // currentClass = {};

  // constructor(){
  //   this.setCurrentClasses();
  // }

  // setCurrentClasses(){
  //   this.currentClass = {
  //     saveable: this.canSave,
  //     special: this.isSpecial
  //   }
  // }
  
  
  
  // imageUrl = 'http://lorempixel.com/400/200';
  // isUnchanged:boolean = false;

  // name:string = 'Aqeel Raza';
  // showName:boolean = false;
  // greetings:number = 3;
  
  
  
  // people = ['Rick','Daryle', 'Carl', 'Glen'];

  // people2 = [
  //   {
  //     firstName: 'Aqeel',
  //     lastName: 'Raza'
  //   },
  //   {
  //     firstName: 'Fahad',
  //     lastName: 'Aslam'
  //   },
  //   {
  //     firstName: 'Jahanzaib',
  //     lastName: 'Raza'
  //   }
  // ];

  // constructor(){
  //   this.people[2] = 'Carol';
  // }
  
  
  
  // customer: {id: number, name:string, email:string};
  // customer:Customer;
  // Customers:Customer[];

  // constructor(){
  //   this.customer = {
  //     id:1,
  //     name: 'John Doe',
  //     email: 'john@gmail.com'
  //   }

  //   this.Customers = [{
  //     id:1,
  //     name: 'John Doe',
  //     email: 'john@gmail.com'
  //   }, {
  //     id:2,
  //     name: 'myname',
  //     email: 'john@gmail.com'
  //   }, {
  //     id:3,
  //     name: 'aqeel raza',
  //     email: 'john@gmail.com'
  //   }, {
  //     id:4,
  //     name: 'Adnana',
  //     email: 'john@gmail.com'
  //   }];
  // }
  
  
  
  
  
  
  
  
  
  // name: string = 'John Doe';
  // age:number = 35;
  // hasChildren:boolean = true;
  // city:any = 'Boston';
  // myNumArray:number[] = [1,2,3];
  // myStringArray:string[]= ['Hello', 'World'];
  // myAnyArrays:any[] =[1,2, 'Hello'];
  // mtTuple: [string, number] = ['hello', 12];
  // unusable: void = undefined;
  // u: undefined = undefined;
  // n:null = null;

  // constructor() {
  //   this.hasChildren = false;
  // }





  // name = 'Aqeel Raza';
  // age = 35;
  // person = {firstname: 'Adnan', lastName: 'Khwaja'};

  // constructor(){
  //   console.log('Contructor ran...');
  //   // this.age = 36;
  //   this.hasBirthday();
  //   console.log(this.hasBirthday());

  // }

  // hasBirthday(){
  //   this.age += 1;
  // }

  // showAge(){
  //   return this.age;
  // }
}


