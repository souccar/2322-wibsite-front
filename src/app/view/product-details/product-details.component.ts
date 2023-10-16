import { Component, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  product: ReadProductDto;

  baseUrl = environment.baseUrl;
  loading: boolean = false;
  selectedImageUrl: string = '';
  id: number;

  detailImages: CarouselImage[] = [];
  detailThumbs: CarouselImage[] = [];

  img:CarouselImage;

  constructor(
    injector: Injector,
    private _productService: ProductService,
    private route: ActivatedRoute
  ) {
    route.params.subscribe((e: any) => {
      this.id = e.id;
    });
    this.getProductById(this.id);
  }

  getProductById(id: any) {

    this._productService.getById(id).subscribe((responce: any) => {
      if (responce.success === true) {
        this.product = new ReadProductDto();
        this.product.id = responce.result.id;
        this.product.name = responce.result.name;
        this.product.point = responce.result.point;
        this.product.description = responce.result.description;
        this.product.category = responce.result.category;
        this.product.brand = responce.result.brand;
        this.product.skin_type = responce.result.skinType;
        this.product.product_images = responce.result.images;

        this.product.product_images.forEach((element)=>{
          this.img = new CarouselImage();
          this.img.id = element.id;
          this.img.img = this.baseUrl+element.imagePath;

          this.detailImages.push(this.img);
          this.detailThumbs.push(this.img);
        })

        this.selectedImageUrl = this.product.product_images[0].imagePath;
        this.loading = true;
        console.log(this.detailImages)
      }
    });
  }

  changeImage(imagePath: string) {
    this.selectedImageUrl = imagePath;
  }

}

export class CarouselImage {
  id: string;
  img: string;
}


