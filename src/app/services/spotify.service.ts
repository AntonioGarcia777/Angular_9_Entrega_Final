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
      'Authorization': 'Bearer BQBNncA3Ulb-NXKCJG1aWBz4ML8bNwpQOBa0YZabXg0j9IJ635qvO7oR4O3uqx57krn2wR1EZvwrnNqfUXS1i9FD4zWMk1iUBShnt31ENa36i6v8AqKrR1Kr_gpe3mkdQgUP4qXmvY2Oq9evcKc74i4206e6iu_CTVF_P7g3Zmj4s3l8DyrmaJCj01lF0Ajtkpc'
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

  getArtista(id:string) {

    return this.getQuery(`artists/${id}`);

  }

}
