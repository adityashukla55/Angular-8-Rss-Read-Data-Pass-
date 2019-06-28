import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee{
  constructor(
    public title:string,
    public link:string,
  ) {}
}

export class News{
  constructor(
    public id:string,
    public title:string,
    public link:string,
    public author:string,
    public publishedDate:string,
    public updatedDate:string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
  private httpClient:HttpClient
  ) {

  }

  getEmployees()
  {
    console.log("test call");
    return this.httpClient.get('http://localhost:8080/hi');
  }
  public deleteEmployee(employee) {

    console.log("Delete data");
    return this.httpClient.delete<Employee>("http://localhost:8080/rssdatadel");
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }


  getNews()
    {
    console.log("test call");
    return this.httpClient.get<News[]>('http://localhost:8080/rssdata');
    }
}
