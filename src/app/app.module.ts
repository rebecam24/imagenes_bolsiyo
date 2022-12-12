import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './state/app.state';
import { ModalComponent } from './components/modal/modal.component';
import { AngularPaginatorModule } from 'angular-paginator';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ToolbarComponent,
    ImagesListComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularPaginatorModule,
    StoreModule.forRoot(ROOT_REDUCERS),//TODO: se genera luego de instalar ngrx store
    StoreDevtoolsModule.instrument({ name: 'TEST'}) //TODO: storeDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }) Se genera importacion por instalar store devtool se agrega name:'TEST' para hacer pruebas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
