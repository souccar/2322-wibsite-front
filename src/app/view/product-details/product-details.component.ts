import {  Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // detailImages: any[] = [
  //   {
  //     id: 'large-0',
  //     img: '/assets/img/homePage/302993927341_4.jpg',
  //   },
  //   {
  //     id: 'large-1',
  //     img: '/assets/img/homePage/302995889005_3.jpg',
  //   },
  //   {
  //     id: 'large-2',
  //     img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_CLEANSERS-resized.jpg',
  //   },

  //   {
  //     id: 'large-4',
  //     img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_MOISTURIZER-resized.jpg',
  //   },
  //   {
  //     id: 'large-5',
  //     img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_BABY-resized.jpg',
  //   }
  // ];

  // detailThumbs: any[] = [
  //   {
  //     id: 'thumb-0',
  //     img: '/assets/img/homePage/302993927341_4.jpg',
  //   },
  //   {
  //     id: 'thumb-1',
  //     img: '/assets/img/homePage/302995889005_3.jpg',
  //   },
  //   {
  //     id: 'thumb-2',
  //     img:  '/assets/img/homePage/CETAPHIL_Homepage_Tiles_CLEANSERS-resized.jpg',
  //   },

  //   {
  //     id: 'thumb-4',
  //     img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_MOISTURIZER-resized.jpg',
  //   },
  //   {
  //     id: 'thumb-5',
  //     img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_BABY-resized.jpg',
  //   }
  // ];

  product: ReadProductDto;
  baseUrl = environment.baseUrl;
  Isloading: boolean = false;
  selectedImageUrl: string = '';
  id: number;
  detailImages: CarouselImage[] = [];
  detailThumbs: CarouselImage[] = [];

  img:CarouselImage;

  constructor(
    injector: Injector,
    private _productService: ProductService,
    private route: ActivatedRoute,

  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((e: any) => {
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
          this.img.id = element.id.toString();
          this.img.img = this.baseUrl+element.imagePath;

          this.detailImages.push(this.img);
          this.detailThumbs.push(this.img);
        });

        this.selectedImageUrl = this.product.product_images[0].imagePath;
        this.Isloading = true;
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


