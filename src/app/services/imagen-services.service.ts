import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataResponse, Images } from '../Interfaces/images';
import { enviroment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})

export class ImagenServicesService {

  subject = new BehaviorSubject<DataResponse>({
    hits:[],total:0,totalHits:0
  });

  private baseUrl = `${enviroment.urlBase}/api/?${enviroment.key}`;

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

  /*TODO: Servicio que obtiene imagenes por filtro de categoria*/ 
  getImageByCategory(category: string): Promise<DataResponse> {   
    return new Promise((resolve,reject)=>{
      this.http.get<DataResponse>(`${ this.baseUrl }&category=${ category }`).subscribe(resp => resolve(resp));
    })
  }

  /*TODO: Servicio que obtiene imagenes por filtro de palabra en espanol*/ 
  getImageByWord(word: string): Promise<DataResponse> {    
    return new Promise((resolve,reject)=>{
      this.http.get<DataResponse>(`${ this.baseUrl }&lang=es&q=${ word }`).subscribe(resp => resolve(resp));
    })
  }

  /*TODO: Servicio que filtra por palaba y categoria*/ 
  getImageByWordAndCategory(category: string, word: string): Promise<DataResponse> {    
    return new Promise((resolve,reject)=>{
      this.http.get<DataResponse>(`${ this.baseUrl }&lang=es&q=${ word }&category=${ category }`).subscribe(resp => resolve(resp));
    })
  }

  setSubject(value: DataResponse) {
    this.subject.next(value)
  }
}
