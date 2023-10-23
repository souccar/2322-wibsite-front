import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { GlideComponent } from './glide/glide.component';
import { GlideThumbsComponent } from './glide-thumbs/glide-thumbs.component';
import { GlideProductComponent } from './glide-product/glide-product.component';


@NgModule({
  declarations: [
    GlideComponent,
    GlideThumbsComponent,
    GlideProductComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    GlideComponent,
    GlideThumbsComponent,
    GlideProductComponent
  ]
})

export class ComponentsCarouselModule { }
