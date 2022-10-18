import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any []=[];


  constructor(private spotify: SpotifyService) { 

    this.spotify.getNewReleases().subscribe((res)=> {

      this.nuevasCanciones = res;      

    })


  }

  ngOnInit(): void {
  }

}
