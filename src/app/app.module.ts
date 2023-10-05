import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './admin/containers/layout/layout.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ViewModule } from './view/view.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { BsModalService } from 'ngx-bootstrap/modal';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ServiceProxyModule } from 'src/shared/service-proxies/service-proxy.module';

@NgModule({
  declarations: [
    AppComponent,
   
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ViewModule,
    LayoutModule,
    CommonModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    ServiceProxyModule,
    // SharedModule

  ],
  providers:[BsModalService,TranslateService],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]

})
export class AppModule { }


export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
