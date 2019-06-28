import { Component, Input } from '@angular/core';
import { Post } from '../models';

@Component({
  selector: 'app-post',
  template: `
    
  <div class="w3-container">
      <button class=" w3-block btn btn-light"><h4 *ngIf="!hidden">
      <a target="_blank" [href]="post.link">{{post.title}}</a><sup> ↗</sup>
    </h4> </button>

      <h4 *ngIf="hidden" (click)="hidden = !hidden">
      {{post.title}}<small class="more-info">…</small>
      </h4>

  <div class="w3-card-4" style="width:70%">
    <header class="w3-container w3-light-grey">
      <h6 class="text-muted"> <span *ngIf="post.author"> {{post.author}},</span>
      {{post.isoDate ? (post.isoDate|isoToDate|date:'yyyy-MM-dd HH:mm') : ''}}
      </h6>
    </header>

    <div class="w3-container">
      <div *ngIf="post?.categories?.length && !hidden" class="small text-muted mb-1">
      <em *ngFor="let cat of post.categories; let last = last">{{cat}}<span *ngIf="!last">, </span></em>
    </div>
      <hr>
      
      <div class="post-container" *ngIf="!hidden"> <div [innerHTML]="post.description | sanitizeHtml"></div>
      </div>      
      <br>   
    </div>  
  </div>
</div>

  `,
  styles: ['employee.component.css']
})
export class PostComponent {

  @Input() post: Post = new Post();
  @Input() hidden = false;

  constructor() {
  }
}
