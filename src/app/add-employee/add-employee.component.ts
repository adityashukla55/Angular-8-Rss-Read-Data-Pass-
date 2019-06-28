import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from '../service/http-client.service';

import { finalize } from 'rxjs/operators';
import { CORSProxyList } from '../constants';
import { CoreService } from '../core.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: []
})
export class AddEmployeeComponent implements OnInit {

  newFeed: string = '';
  cors: string = 'corsanywhere';
  error: string = '';
  feeds: string[] = [];
  loading: boolean = false;
  CORSList = [];
  version$: Observable<string> = null;
  data:any;
  udata:any;

  constructor(public coreService: CoreService,
  private httpClientService: HttpClientService,
  private http: HttpClient

  ) {
    Object.keys(CORSProxyList)
      .forEach(key => this.CORSList.push({key, url: CORSProxyList[key]}));
    const lastCORS = localStorage.getItem('cors');
    if (lastCORS && CORSProxyList[lastCORS]) {
      this.cors = lastCORS;
    }
  }

  setCors(event: string) {
    localStorage.setItem('cors', event);
  }

  load() {
    this.feeds = this.coreService.feeds;
  }

  
  
  ////////
  ngOnInit() {
    this.fetchdata();
    this.load();
    this.version$ = this.coreService.getVersion();
  }
  
 fetchdata()
   {
      this.httpClientService.getEmployees().subscribe(data => {
      this.udata = data;
      console.log(this.udata);
    }
    );
   }
 
  removeFeed(url: string) {
    if (confirm(`Delete the feed: ${url}?`)) {
      this.coreService.removeFeed(url);
      this.coreService.clear(url);
      this.load();
    }
  }

  add() {
    this.newFeed = this.newFeed.trim();
    
    this.loading = true;
    this.error = '';
    this.coreService.add(this.newFeed)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(() => {
        this.newFeed = '';
        this.load();
      }, error => this.error = error);
  }

}
