import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagenServicesService } from 'src/app/services/imagen-services.service';
import { DataResponse, Images } from '../../Interfaces/images';
import { loadedImages, loadImages, loadOneImage } from '../../state/actions/images.actions';
import { Observable } from 'rxjs';
import { selectLoading } from '../../state/selectors/images.selectors';

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
  public currentPage: any;
  public itemsPerPage: number = 10;
  data:any;
  loading$: Observable<boolean> = new Observable();

  constructor(
    private imagesServices: ImagenServicesService,
    private store: Store<any>
    ) { 
      this.dataImages = {hits:[],total:0,totalHits:0};
      this.data = this.imagesServices.subject.subscribe(resp=>{
        this.dataImages = resp;
      })
  } 

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadImages())
    this.getAllImages();
  }

  ngOnDestroy(): void {
    this.data.unsubscribe();
  }
  
  ngAfterViewInit(): void {
    const modalPreview = document.getElementById('previewModal')
    modalPreview!.addEventListener('shown.bs.modal', () => {  })
  }

  /* TODO: Metodo para obtener todas las imagenes sin filtro*/ 
  async getAllImages() {
    this.dataImages = await this.imagesServices.getImages();
    this.store.dispatch(loadedImages( { dataImages: this.dataImages })) //TODO: Se lanza la accion para saber si es success la carga de las imagenes
  }

  //TODO: Metodo para obtener la data de una sola imagen
  previewImage(item:Images) {
    this.store.dispatch(loadOneImage( { image: item })) //TODO: Se lanza la accion para guardar en el store la info de una sola imagen
    this.views = item.views;
    this.likes = item.likes;
    this.imageSelected = item.webformatURL;
    this.tags = item.tags.split(',')    
  }
}
