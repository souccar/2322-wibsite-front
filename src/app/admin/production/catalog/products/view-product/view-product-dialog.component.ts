import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-view-product-dialog',
  templateUrl: './view-product-dialog.component.html',

})
export class ViewProductDialogComponent implements OnInit {
  baseUrl=environment.baseUrl;
  data = new ReadProductDto();
  images:[{'imagePath':string}];
  id: number;
  editable: true;
  constructor(private _productService: ProductService,
    public bsModalRef: BsModalRef,

   ) { }

  ngOnInit(): void {

    this.displayProduct();
  }
  displayProduct()
  {
    this._productService.getById(this.id).subscribe((result) => {
      
      this.data = result.result;
      this.images=result.result.images

    });
  }




}
