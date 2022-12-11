import { createReducer, on } from '@ngrx/store';
import { ImagesState } from 'src/app/Interfaces/images.state';
import { loadedImages, loadImages, loadOneImage } from '../actions/images.actions';

//TODO: inicializando el estado
export const initialState: ImagesState = { loading: false, dataImages: { hits:[], total:0, totalHits:0} };

export const imagesReducer = createReducer(
  initialState,
  on(loadImages, (state) => {
    return {  ...state, loading: true }
  }),
  on(loadedImages, (state, {dataImages}) => {    
    return {  ...state, loading: false, dataImages }
  }),
  on(loadOneImage, (state, {image}) => {    
    return {  ...state, loading: false, image }
  })
);