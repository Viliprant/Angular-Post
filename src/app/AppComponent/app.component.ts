import { Component } from '@angular/core';

//Model
import { Post } from '../../models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
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
}
