import { User } from './../models/user';
import { Country } from './../models/country';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class MyServiceService {

  constructor(private http: HttpClient){
    
  }

  getCuntryList(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all')
    .pipe(tap(data => console.log(data)) , catchError(this.errorHandler));
  }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>('http://jsonplaceholder.typicode.com/users')
    .pipe(tap(data => console.log(data)) , catchError(this.errorHandler));
  }

  addUser(user): Observable<User[]>{
    return this.http.post<User[]>('http://jsonplaceholder.typicode.com/users', user)
    .pipe(tap(data => console.log('ADD USER ',data)) , catchError(this.errorHandler));
  }
  deleteUser(id): Observable<User[]>{
    return this.http.delete<User[]>('http://jsonplaceholder.typicode.com/users/'+id)
    .pipe(tap(data => console.log('DELETE USER ',data)) , catchError(this.errorHandler));
  }
  updateUser(user): Observable<User[]>{
    return this.http.put<User[]>('http://jsonplaceholder.typicode.com/users/'+user.id, user)
    .pipe(tap(data => console.log('UPDATE USER ',data)) , catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
  
  getUser(){
    // this.myObservable().pipe(map(data => {}))
    // return this.http.get('http://jsonplaceholder.typicode.com/users')
    //   .pipe(map(res => ))
  }


  // data: Observable<Array<number>>;
  // constructor(){

  // }

  // getData(){
  //   this.data = new Observable(observer => {
  //     setTimeout(() => {
  //       observer.next(1);
  //     }, 1000);
  //     setTimeout(() => {
  //       observer.next(2);
  //     }, 2000);
  //     setTimeout(() => {
  //       observer.next(3);
  //     }, 3000);
  //     setTimeout(() => {
  //       observer.next('Hello');
  //     }, 4000);
  //     setTimeout(() => {
  //       observer.complete();
  //     }, 5000);
  //   });

  //   return this.data;
  // }


  // users:string[];
  // constructor() {
  //   this.users = ['aqeel', 'raza', 'adana', 'fahad'];
  // }

  // geyUsers(){
  //   return this.users;
  // }
}
