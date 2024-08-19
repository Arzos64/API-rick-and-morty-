import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.developed';
import { Personajes } from '../models/personajes';


@Injectable({
  providedIn: 'root'
})
export class RickServiceSpecService {

  apiRickAndMorty = environment.apiRickAndMorty;

  constructor(private http:HttpClient) { }

  getCharacters(): Observable<Personajes> {
    return this.http.get<Personajes>(this.apiRickAndMorty);
  }
  
}
