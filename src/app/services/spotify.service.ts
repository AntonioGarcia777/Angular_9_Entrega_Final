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
      'Authorization': 'Bearer BQBu9HsW8h-Mgk9hxPmcjaTkr4L4qIEmqGV4w9HW2G70rfQQM3jEdFOJ-CDnYAyqOl77ndb5swDhJtJ2976zEPKLIwOwmN8s5LK8i4qCXbrsbb8--2epAbKNILY4S20UKawmqswg4SbncRKJ3p7mViJVRw0R5dALlxpZEU3eXYnWTfXiKhExOuigQjYky40ftlI'
    });
    
    return this.http.get(`${URL}/${query}`, {headers})


  }

  getNewReleases() {    

    return this.getQuery('browse/new-releases?limit=20').pipe(
      map((res:any)=>{
        return res.albums.items; 
      }));;

  }

  getArtistas(termino:string) {

    return this.getQuery(`search?query=${termino}&type=artist&market=es&limit=15`)


  }



}
