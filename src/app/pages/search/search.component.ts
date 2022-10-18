import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas:any [] = [];

  constructor(private spotify:SpotifyService) { }
 

  buscar(termino:string){

    this.spotify.getArtistas(termino).subscribe((res:any)=>{

      this.artistas = res.artists.items;      

    })    
  }

}
