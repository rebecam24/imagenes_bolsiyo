import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ImagesState } from '../../Interfaces/images.state';

//TODO: Este state  trae la info de app.state 

export const selectImagesFeature = (state: AppState) => state.imagesList; //TODO: Selectores Padre

export const selectImagesList = createSelector(
  selectImagesFeature,
  (state: ImagesState) => state.dataImages //TODO: Selectores Hijo
);

export const selectLoading = createSelector(
  selectImagesFeature,
  (state: ImagesState) => state.loading //TODO: Selectores Hijo
);

export const selectOneImage = createSelector(
  selectImagesFeature,
  (state: ImagesState) => state.dataImages.hits //TODO: Selectores Hijo
);