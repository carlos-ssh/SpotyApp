import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service List0!');
   }
   
   getQuery( query: string ) {
      const url = `https://api.spotify.com/v1/${ query }`;

      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBz724xgTSTgVxo1MpUyu914jzSklKwkyNRTBPYxiqSrCdmyNENeSr5XEhORqsULH3cS-KhHx7iN7yEXfU'
      });

      return this.http.get(url, { headers });
    } 
    
    getNewReleases(){
      
      return this.getQuery('browse/new-releases')
          .pipe( map( data => data['albums'].items));
   }

   
   getArtista( termino: string ){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
          .pipe( map( data => data['artists'].items));
  }

}
