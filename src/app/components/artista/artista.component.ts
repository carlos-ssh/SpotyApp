import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  constructor( private router: ActivatedRoute ) { 

    this.router.params.subscribe( params => {
      console.log(params['id']);
    })
  }
} 
