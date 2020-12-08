import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './../material/material.module';
import { NasaRoutingModule } from './nasa-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseNasaComponent } from './components/base-nasa/base-nasa.component';
import { PictureDetailComponent } from './components/picture-detail/picture-detail.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';



@NgModule({
  declarations: [BaseNasaComponent, PictureDetailComponent, GalleryComponent, SlideshowComponent],
  imports: [
    CommonModule,
    NasaRoutingModule,
    MaterialModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NasaModule { }
