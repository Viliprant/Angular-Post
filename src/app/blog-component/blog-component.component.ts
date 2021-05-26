import { Component, OnInit } from '@angular/core';

//Model
import { Post } from '../models/Post';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss']
})
export class BlogComponentComponent implements OnInit {

  postList: Post[] = [
    new Post('Spiderman', 'Araignée', 0),
    new Post('Batman', 'Chauve-souris', 0),
    new Post('Iron Man', 'Robot', 0),
    new Post('Aquaman', 'Poisson', 0),
    new Post('Wonderwoman', 'Super Femme', 0),
    new Post('Hulk', 'Géant vert', 0),
    new Post('Thor', 'Coup de foudre', 0),
    new Post('Dr Strange', 'Maitre du temps capé', 0),
    new Post('Captain America', 'Nationaliste Américain', 0),
    new Post('Groot', 'Ecologie', 0),
    new Post('Rocket', 'Trop mignon', 0),
    new Post('Thanos', 'Super méchant', 0),
    new Post('Garona', 'Verte de peau', 0)
  ]

  constructor() { }

  ngOnInit(): void {
  
  }
}
