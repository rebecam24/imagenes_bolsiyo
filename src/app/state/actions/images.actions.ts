import { createAction, props } from '@ngrx/store';
import { DataResponse, Images } from 'src/app/Interfaces/images';

//TODO: accion que se lanza para el listado de imagenes
export const loadImages = createAction(
  '[Images List] Load Images'
);

//TODO: accion que se lanza para el listado de imagenes cargado correctamente
export const loadedImages = createAction(
  '[Images List] Load Images success',
  props<{ dataImages: DataResponse }>()
);

//TODO: accion que se lanza cuando se selecciona una imagen
export const loadOneImage = createAction(
  '[Images Item] Load One Image success',
  props<{ image: Images }>()
);