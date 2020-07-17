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
        'Authorization': 'Bearer BQAOpEaICxi8ujU2b_6XoT9RYWd3RbEuEQDmVdnnxnaOeqUmxr3Wdpew1l1YCp6GBMtiVroQoAlT-EzTq5I'
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
