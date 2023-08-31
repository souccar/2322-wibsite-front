import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ErrorComponent } from '../views/error/error.component';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations:
   [
    // ErrorComponent
   ]
  ,
  imports: [
    RouterModule,
    CommonModule,
    TranslateModule,

  ],
  exports: [
    RouterModule,
    TranslateModule,
    // ErrorComponent,

    CommonModule,
  ],
})
export class SharedModule {}
