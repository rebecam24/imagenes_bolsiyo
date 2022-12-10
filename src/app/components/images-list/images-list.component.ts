import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ImagenServicesService } from 'src/app/services/imagen-services.service';
import { DataResponse, Images } from '../../Interfaces/images';

@Component({
  selector: 'images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.css']
})
export class ImagesListComponent implements OnInit,AfterViewInit{
  public dataImages: DataResponse;
  public tags: string [] = [''];
  public imageSelected: string = '';
  public likes: number = -1;
  public views: number = -1;
  data:any; // ==>borrar

  constructor(
    private imagesServices: ImagenServicesService
    ) { 
      this.dataImages = {hits:[],total:0,totalHits:0};
      this.data = this.imagesServices.subject.subscribe(resp=>{
        this.dataImages = resp;
      })
  } 

  ngOnInit(): void {
    this.getAllImages();
  }

  ngOnDestroy(): void {
   this.data.unsubscribe() //===>>> para borrar 
  }
  
  ngAfterViewInit(): void {
    const modalPreview = document.getElementById('previewModal')
    modalPreview!.addEventListener('shown.bs.modal', () => {  })
  }

  /* TODO: Metodo para obtener todas las imagenes sin filtro*/ 
  async getAllImages() {
    this.dataImages = await this.imagesServices.getImages();
  }

  //TODO: Metodo para obtener la data de una sola imagen
  previewImage(item:Images) {
    this.views = item.views;
    this.likes = item.likes;
    this.imageSelected = item.webformatURL;
    this.tags = item.tags.split(',')    
  }
}
