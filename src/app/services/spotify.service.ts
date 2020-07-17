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
        'Authorization': 'Bearer BQCmiYjvG1Q_TFV9sK85YxbESgmqiO08gpcMWwOlXKH01AvWjePeczJFpDmpv4pzmNs6NPpsrWLRJirWBN0'
      });

      return this.http.get(url, { headers });
    } 
    
    getNewReleases(){ 
      
      return this.getQuery('browse/new-releases')
          .pipe( map( data => data['albums'].items));
   }

   
   getArtistas( termino: string ){
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
          .pipe( map( data => data['artists'].items));
  }



  getArtista( id: string ){
    
    return this.getQuery(`artists/${ id }`)
          //.pipe( map( data => data['artists'].items));
  }

  getTopTacks( id: string ){
    
    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
          .pipe( map( data => data['tracks']));
  }


}
