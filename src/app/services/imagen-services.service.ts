import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { DataResponse } from '../Interfaces/images';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ImagenServicesService {

  subject = new BehaviorSubject<DataResponse>({
    hits:[],total:0,totalHits:0
  });

  private baseUrl = `${enviroment.baseUrl}/api/?key=${enviroment.key}`;

  constructor( private http: HttpClient ) { }

  /*TODO: Servicio que obtine todas las imagenes*/ 
  getImages(): Promise<DataResponse> {    
    return new Promise((resolve,reject)=>{
      this.http.get<DataResponse>(`${ this.baseUrl }`).subscribe(resp =>{ 
        this.subject.next(resp)
        resolve(resp)
      });
    })
  }

  /*TODO: Servicio que filtra por palabra y/o categoria*/ 
  getImageByWordOrCategory(category?: string, word?: string): Promise<DataResponse> {  
    const url = `${ this.baseUrl }`;
    const searchByCategory = category ? `&category=${ category }` : '';
    const searchByWord = word ? `&lang=es&q=${ word }` : '';

    const search = url + searchByCategory + searchByWord
    
    return new Promise((resolve,reject)=>{
      this.http.get<DataResponse>(search).subscribe(resp => resolve(resp));
    })
  }

  setSubject(value: DataResponse) {
    this.subject.next(value)
  }
}
