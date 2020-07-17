import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service List0!');
   }

   getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD2omI3NFkH86B6mm9kZWygETndxYolSMGBLgPtG99TyyRMyGxVnBwfx7_bh0JYmr8n85uskvvi52A6Hrc'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe( data => {
        console.log(data);
      })
    
   }

}
