import { Component, OnInit } from '@angular/core';
import { ImagenServicesService } from 'src/app/services/imagen-services.service';
import { DataResponse } from '../../Interfaces/images';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit{
  public images: DataResponse;
  hola:any;

  constructor(
    private imagesServices: ImagenServicesService
    ) { 
      this.images = {hits:[],total:0,totalHits:0};
      this.hola=this.imagesServices.subject.subscribe(resp=>{
        this.images=resp
      })
  } 

  ngOnInit(): void {
    this.getAllImages();
  }

  ngOnDestroy(): void {
    this.hola.unsubscribe()
  }
  
  /* TODO: Metodo para obtener todas las imagenes sin filtro*/ 
  async getAllImages() {
    this.images = await this.imagesServices.getImages();
  }


}
