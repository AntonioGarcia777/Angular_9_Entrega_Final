import { SpotifyService } from './../../services/spotify.service';
import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artistas:any [] = [];
  loading?:boolean;
  logMsg?:boolean;
  error?:boolean;

  constructor(private spotify:SpotifyService) { }
 

  buscar(termino:string){

    if(termino.length > 0) {

      this.loading=true;
      this.logMsg=false;

      this.spotify.getArtistas(termino).subscribe({

        next:(res)=>{
          this.artistas = res;
          this.loading = false;
        },
        error:err=>{

          this.loading = false;
          this.error = true;

          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: err.error.error.message,
            allowOutsideClick: false            
          })

        }


      })
    } else {
      this.logMsg = true;
      this.artistas = [];
    }

      
  }

}
