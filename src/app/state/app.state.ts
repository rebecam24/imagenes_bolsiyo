import { ActionReducerMap } from "@ngrx/store";
import { ImagesState } from "../Interfaces/images.state"
import { imagesReducer } from './reducers/images.reducers';

export  interface AppState {
  imagesList: ImagesState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  imagesList: imagesReducer,
}