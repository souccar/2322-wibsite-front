import { Component, Input, ViewChild, ElementRef, Injector } from '@angular/core';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})


export class ProductComponent   {
  dataLoaded=false;
  product:ReadProductDto;
  myThumbnail="https://wittlock.github.io/ngx-image-zoom/assets/thumb.jpg";
  myFullresImage="https://wittlock.github.io/ngx-image-zoom/assets/fullres.jpg";
  max:number=5;
  isReadyOnly:boolean=true;
  rate = 4;
  rateReadonly = 5;
  constructor(
    injector: Injector,
    private _productService: ProductService,
    ) {
      this.getProductById(1);
    }
 


    getProductById(id:any)
    {
      this._productService.getById(id).subscribe((responce:any)=>{
     console.log(responce);
     this.product=responce.result;
     this.dataLoaded=true;
      });
    }
  setting = {
    gap: 0,
    type: 'carousel',
    hideNav: true,
    perView: 1,
  }
  setting2 = {
    gap: 0,
    type: 'carousel',
    hideNav: true,
    perView: 1,
  }
  carouselData: ICarouselItem[] = [
    {
      id: 'carousel-0',
      title: 'Homemade Cheesecake with Fresh Berries and Mint',
      img: '/assets/img/cards/thumb-1.jpg',
      detail: '10.12.2019',
      category: 'Cupcakes',
      badges: ['NEW']
    },
    {
      id: 'carousel-1',
      title: 'Wedding Cake with Flowers Macarons and Blueberries',
      img: '/assets/img/cards/thumb-2.jpg',
      detail: '10.06.2020',
      category: 'Cakes',
      badges: ['TRENDING']
    },
    {
      id: 'carousel-2',
      title: 'Cheesecake with Chocolate Cookies and Cream Biscuits',
      img: '/assets/img/cards/thumb-3.jpg',
      detail: '03.01.2020',
      category: 'Cupcakes',
      badges: ['PROCESSED']
    },
    {
      id: 'carousel-3',
      title: 'Homemade Cheesecake with Dried Lemon on Top',
      img: '/assets/img/cards/thumb-1.jpg',
      detail: '22.02.2020',
      category: 'Cakes',
      badges: ['']
    },
    {
      id: 'carousel-4',
      title: 'Cupcake with Cream Biscuit Bananas and Sour Cherry',
      img: '/assets/img/cards/thumb-2.jpg',
      detail: '12.05.2020',
      category: 'Cakes',
      badges: ['DONE']
    }
  ];
  detailImages: ICarouselImage[] = [
    {
      id: 'large-0',
      img: '/assets/img/homePage/302993927341_4.jpg',
    },
    {
      id: 'large-1',
      img: '/assets/img/homePage/302995889005_3.jpg',
    },
    {
      id: 'large-2',
      img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_CLEANSERS-resized.jpg',
    },

    {
      id: 'large-4',
      img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_MOISTURIZER-resized.jpg',
    },
    {
      id: 'large-5',
      img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_BABY-resized.jpg',
    }
  ];

  detailThumbs: ICarouselImage[] = [
    {
      id: 'thumb-0',
      img: '/assets/img/homePage/302993927341_4.jpg',
    },
    {
      id: 'thumb-1',
      img: '/assets/img/homePage/302995889005_3.jpg',
    },
    {
      id: 'thumb-2',
      img:  '/assets/img/homePage/CETAPHIL_Homepage_Tiles_CLEANSERS-resized.jpg',
    },

    {
      id: 'thumb-4',
      img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_MOISTURIZER-resized.jpg',
    },
    {
      id: 'thumb-5',
      img: '/assets/img/homePage/CETAPHIL_Homepage_Tiles_BABY-resized.jpg',
    }
  ];


}
export interface ICarouselImage {
  id: string;
  img: string;
}
export interface ICarouselItem {
  id: string;
  title: string;
  img: string;
  detail: string;
  category: string;
  badges: string[];
}
