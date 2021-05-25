import { Component, OnInit, Input } from '@angular/core';

//Model
import { Post } from '../../models/Post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})

export class PostListComponentComponent implements OnInit {

  @Input() postList: Post[] = [];

  constructor() { }

  ngOnInit(): void {

  }

}
