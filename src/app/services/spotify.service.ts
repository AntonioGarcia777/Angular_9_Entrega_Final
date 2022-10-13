import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders ({
      'Authorization': 'Bearer BQATq_xKs81Hkk0HvaSjCPbtIDOaq8n_X6VdDfmpXERkS0He7TVC9i-6QmDWsmMc8eQPujZ64vJAL51PCetI5SxyKWEn1IdinDMyt7I5EgKFr9rvuIc'
    });

    return this.http.get(`https://api.spotify.com/v1/browse/new-releases?limit=20`, {headers});

  }



}
