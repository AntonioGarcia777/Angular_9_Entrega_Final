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
      'Authorization': 'Bearer BQD_JKIqAZ4WVzaD5sSixrtox0RYskMZA9t4QQlndLXLyqKC1nRmf2eEtEIaVWUMDPy4PM2OYHSYSI6PebiR9l3exg5m2tc8KVSti1FLyIDDUUKtrY0JLqvfE7I3j_z5iJZKGbMBg3-Xo3tJCLQamB7vPv5ywuLtBKK2ddFNGKfQvGGtE501rnSsy6jowQnUEbM'
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
