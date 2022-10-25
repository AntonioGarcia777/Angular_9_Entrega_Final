import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  artista: any= {};

  loadingArtista: boolean;

  constructor(private spotify:SpotifyService, private router:ActivatedRoute) { 

    this.loadingArtista = true;

    this.router.params.subscribe(params => {
      this.getArtista(params ['id']);
    })

  }

  getArtista(id:string) {

    this.loadingArtista = true;

    this.spotify.getArtista(id).subscribe(res =>{

      console.log(res);

      this.artista = res;

      this.loadingArtista = false;

    })


  }

  

}
