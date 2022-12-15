import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/Interfaces/categories';
import { ImagenServicesService } from 'src/app/services/imagen-services.service';


@Component({
  selector: 'form-images',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  public imagesForm: FormGroup;
  public categories: Categories[] = [];
  public images: any;
  public showSpinner = false;
  public alert = false;

  constructor(
    private fb: FormBuilder,
    private imagesServices: ImagenServicesService
    ) { 

    /*TODO: Creando formulario para filtro de busqueda*/ 
    this.imagesForm = this.fb.group({
      textImages: ['', Validators.maxLength(100)],
      categoryValue: [''],
    });
    this.setCategories();
    
  } 
  
  ngOnInit(): void {
  }

  /*TODO: Obtener los valores del formulario*/ 
  public get textImages() { return this.imagesForm.get('textImages'); }
  public get categoryValue() { return this.imagesForm.get('categoryValue'); }
  
  /*TODO: Metodo que carga los valores de las categorias en el select*/ 
  setCategories() {
    this.categories = [
      { value: '',   name: 'Selecciona una categoria' },
      { value: 'science',   name: 'science' },
      { value: 'education', name: 'education' },
      { value: 'people',    name: 'people' },
      { value: 'feelings',  name: 'feelings' },
      { value: 'computer',  name: 'computer' },
      { value: 'buildings', name: 'buildings'}
    ];    
  }

  /*TODO: Busca las imagenes segun el campo que seleccione*/ 
  async searchImage() {
    this.showSpinner = true;
    this.images =  await this.imagesServices.getImageByWordOrCategory(this.categoryValue?.value,this.textImages?.value);
    this.alert = false;  
    this.showSpinner = false;
    this.imagesServices.setSubject(this.images);

    if (this.images.hits.length == 0) {    
      this.alert = true;  
      this.textImages?.setValue("");
      this.categoryValue?.setValue("");
    }    
  }
}