import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GlideComponent } from './glide/glide.component';
import { GlideThumbsComponent } from './glide-thumbs/glide-thumbs.component';


@NgModule({
  declarations: [
    GlideComponent,
    GlideThumbsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    GlideComponent,
    GlideThumbsComponent
  ]
})

export class ComponentsCarouselModule { }
