import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutModule } from '../containers/layout/layout.module';
import { CreateNewsDialogComponent } from './create-news/create-news-dialog.component';
import { EditNewsDialogComponent } from './edit-news/edit-news-dialog.component';
import { NewsComponent } from './news.component';
import { NewsRoutingModule } from './news-routing.module';
@NgModule({
  declarations: [
    NewsComponent,
    CreateNewsDialogComponent,
    EditNewsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LayoutModule,
    NewsRoutingModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NewsModule { }
