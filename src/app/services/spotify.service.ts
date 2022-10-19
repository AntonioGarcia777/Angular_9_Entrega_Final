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
      'Authorization': 'Bearer BQDdHD6_8BdBHfKN9epxkANHFfAtKQq4aWUsGj6dvYJydxtZkJ3LF51AwwEX-H4cJZ_vzLc8MFy8HSREpaLW8Q1fDnhaMrxid9zOnkbPmL3OC2hdIV8'
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
