import { Component, OnInit } from '@angular/core';
import { RickServiceSpecService } from '../../services/rick-service.spec..service';
import { Personajes } from '../../models/personajes';


@Component({
  selector: 'app-principal-rick',
  standalone: true,
  imports: [],
  templateUrl: './principal-rick.component.html',
  styleUrl: './principal-rick.component.css'
})
export class PrincipalRickComponent implements OnInit {

  personajes?: Personajes;

  constructor(private rickService: RickServiceSpecService) { }

  ngOnInit(): void {
    this.getCharacters();
    };


  getCharacters(){
    this.rickService.getCharacters().subscribe({
      next: (data) => {
        console.log('Data received', data);
        console.log(data);
        this.personajes = data;
      },
      error: (error) => {
        console.error('There was an error!', error);
         console.log(error);
      }
    }) 
  }
  

  }


