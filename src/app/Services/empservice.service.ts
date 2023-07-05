import { Component, Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Post } from '../Services/Post'
@Injectable({
  providedIn: 'root',
})
//@Inject({
//  providedIn: 'root'
//})
export class EmployeeService {

  myAppUrl: string = "";
  public hurl: string = "https://localhost:7224/";
  constructor(private httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.myAppUrl = baseUrl;
  }


  getCityList(): Observable<any> {
    return this.httpClient.get(this.hurl + 'api/Employee/GetCityList')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //getdata(): Observable<any> {
  //  return this.httpClient.get('https://localhost:7224/WeatherForecast').
  //    pipe(catchError(this.errorHandler));
  //}

  //getEmployees(): Observable<any> {
  //  return this.httpClient.get('https://localhost:7224/weatherforecast')
  //    .pipe(
  //      catchError(this.errorHandler)
  //    )
  //}
  getEmployees(): Observable<any> {
    return this.httpClient.get(this.hurl  + 'api/Employee/Index')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  saveEmployee(post: Post): Observable<any> {
    return this.httpClient.post(this.hurl + 'api/Employee/Create', post)
      .pipe(
        catchError(this.errorHandler)
      )
  }
  //employee
  updateEmployee(id: number): Observable<any> {

    return this.httpClient.put(this.hurl + 'api/Employee/Edit', id)
      .pipe(
        catchError(this.errorHandler)
      )
  }




  deleteEmployee(id: number) {
    return this.httpClient.delete(this.hurl + "api/Employee/Delete/" + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  getEmployeeById(id: number) {
    return this.httpClient.get(this.hurl + "api/Employee/Details/" + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }  
 


  

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }

  //getCityList() {
  //  return this._http.get(this.myAppUrl + 'api/Employee/GetCityList')
  //    .map(res => res.json())
  //    .catch(this.errorHandler);
  //}
}
