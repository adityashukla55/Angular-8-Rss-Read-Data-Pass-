import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';

import { HttpClient } from '@angular/common/http';
import {News} from '../news';
import {Observable} from "rxjs/index";
@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.css']
})
export class ShowdataComponent implements OnInit {

  news: News[];
  id:any;
  newsdata:any;
  udata:any;
  data:any;

  constructor(
  private httpClientService:HttpClientService,
    private httpClient:HttpClient) { }

  ngOnInit() {
  this.fetchdata();
  }

  fetchdata()
   {
     
     this.httpClientService.getNews().subscribe(newsdata => {
      this.newsdata = newsdata;
      console.log(this.newsdata);
    }

    );
  
   }

    

   deleteAllUser(news: News): void {
    this.httpClient.delete("http://localhost:8080/rssdatadel")
    .subscribe(this.data);
  };

  handleSuccessfulResponse(response)
  {
   this.news=response;
  }

}
