import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataResponse, Images } from '../Interfaces/images';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ImagenServicesService {

  private baseUrl = `${enviroment.urlBase}/api/?${enviroment.key}`;

  constructor( private http: HttpClient ) { }

  /*TODO: Servicio que obtine todas las imagenes*/ 
  getImages(): Promise<DataResponse> {    
    return new Promise((resolve,reject)=>{
      this.http.get<DataResponse>(`${ this.baseUrl }`).subscribe(resp => resolve(resp));
    })
  }

  /*TODO: Servicio que obtiene imagenes por filtro de categoria*/ 
  getImageByCategory(category: string): Observable<Images[]> {   
    return this.http.get<Images[]>(`${ this.baseUrl }&category=${ category }`);
  }

  /*TODO: Servicio que obtiene imagenes por filtro de palabra en espanol*/ 
  getImageByWord(word: string): Observable<Images[]> {    
    return this.http.get<Images[]>(`${ this.baseUrl }&lang=es&q=${ word }`);
  }
}
