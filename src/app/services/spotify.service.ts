import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const URL = environment.spotyUrl;

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string){

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQBjuCtll7e27kKraOofAeh0602RLBVEQUv3U3MWLcr3EE8jNUNGnZVD0t_jFD8Ll46BvCofoyZcXYgx_9f-QpMv8_gFK56xYEjMKE10eHxVWhzcmTY'
    });
    
    return this.http.get(`${URL}/${query}`, {headers})

  }

  getNewReleases() {    

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res:any)=>{
        return res.albums.items; 
      }));

  }

  getArtistas(termino:string) {

    return this.getQuery(`search?query=${termino}&type=artist&market=es&limit=15`).pipe(
      map((res:any)=>{
        return res.artists.items; 
      }));

  }

}
