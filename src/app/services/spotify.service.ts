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
      'Authorization': 'Bearer BQCTL2YGVWr_IKkTzKz5J1t42_UpxSGCq3KWmuY4UJLetElmAgiNpLf0iqS12MgYkEI8e2iF79yH823kCjJSVrG3BPhg2UF-YNwSzvrnTNp5Kp2qIbLeBY0M6FdL-bfACycluQKq6Kj_p8UmmuzTLIY9B5npoT7EBNm5axejSK20S-v9klqc1lmqKGGTfAaTxLA'
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
