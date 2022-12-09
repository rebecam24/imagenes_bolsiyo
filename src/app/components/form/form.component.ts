import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/Interfaces/categories';


@Component({
  selector: 'form-images',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  public imagesForm: FormGroup;
  public categories: Categories[] = [];

  constructor(private fb: FormBuilder) { 
    /*TODO: Creando formulario para filtro de busqueda*/ 
    this.imagesForm = this.fb.group({
      textImage: ['', Validators.maxLength(100)],
      categoryImage: [''],
    });
    this.setCategories();
  } 
  
  ngOnInit(): void {
  }
  
  
  /*TODO: Metodo que carga los vcalores de las categorias en el select*/ 
  setCategories() {
    this.categories = [
      { value: 0, name: 'science' },
      { value: 1, name: 'education' },
      { value: 2, name: 'people' },
      { value: 3, name: 'feelings' },
      { value: 4, name: 'computer' },
      { value: 5, name: 'buildings '}
    ];    
  }
}



