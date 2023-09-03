import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations:
   [
    // ErrorComponent
   ]
  ,
  imports: [
    RouterModule,
    TranslateModule,

  ],
  exports: [
    RouterModule,
    TranslateModule,
    // ErrorComponent,
  ],
})
export class SharedModule {}
