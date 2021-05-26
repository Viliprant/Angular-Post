import { Component, OnInit, Input } from '@angular/core';

//Model
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post?: Post;

  constructor() { }

  ngOnInit(): void {
  }

  addToCounterLoveIts(){
    if(this.post){
      this.post.LoveIts += 1;
    }
  }
  removeToCounterLoveIts(){
    if(this.post){
      this.post.LoveIts -= 1;
    }
  }
}
