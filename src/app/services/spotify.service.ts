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
      'Authorization': 'Bearer BQBZJE3pDRph2m5jKq4AnEmFuaVuj-sz9id1uumQsbfv1gmxn6Mc7i9Mq01RrANjs0WfHlFePG2PDKQSeItZsVN_CMKPZmnbrMwz0qZ-Y_otJr_MORhJ7u17v53D75J8DvmlXHSHSHjXB5w3_dRIkGC9yov1t3xrESQXGVS6YHhMZNARBy7_Qe8CpwnIFpzXgvg'
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
