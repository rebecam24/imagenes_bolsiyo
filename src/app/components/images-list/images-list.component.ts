import { AfterViewInit, Component } from '@angular/core';
import { ImagenServicesService } from 'src/app/services/imagen-services.service';
import { DataResponse, Images } from '../../Interfaces/images';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements AfterViewInit{

  public images: DataResponse;
  constructor(
    private imagesServices: ImagenServicesService
    ) { 
      this.images = {hits:[],total:0,totalHits:0};
  } 

  ngAfterViewInit(): void {
    this.getAllImages();
    
  }
  



  /* TODO: Metodo para obtener todas las imagenes sin filtro*/ 
  async getAllImages() {
    this.images = await this.imagesServices.getImages();
  }
}
