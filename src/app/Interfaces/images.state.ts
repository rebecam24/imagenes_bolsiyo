import { DataResponse } from 'src/app/Interfaces/images';
export interface ImagesState {
  loading: boolean,
  dataImages: Readonly<DataResponse>;
}