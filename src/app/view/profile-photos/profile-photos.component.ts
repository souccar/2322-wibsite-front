import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Lightbox } from 'ngx-lightbox';
import { environment } from 'src/environments/environment';
import { ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { ReadPageTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { ProductService } from 'src/shared/services/product-service/product.service';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePhotosComponent implements OnInit{

  product:ReadProductDto=new ReadProductDto();
  baseUrl=environment.baseUrl;
  id:number;
  isLoading:boolean = false ;
  album = [
    {
      src: '/assets/img/products/marble-cake.jpg',
      thumb: '/assets/img/products/1.png'
    },
    {
      src: '/assets/img/products/parkin.jpg',
      thumb: '/assets/img/products/2.png'
    },
    {
      src: '/assets/img/products/fruitcake.jpg',
      thumb: '/assets/img/products/3.png'
    },
    {
      src: '/assets/img/products/tea-loaf.jpg',
      thumb: '/assets/img/products/4.png'
    },
    {
      src: '/assets/img/products/napoleonshat.jpg',
      thumb: '/assets/img/products/5.png'
    },
    {
      src: '/assets/img/products/magdalena.jpg',
      thumb: '/assets/img/products/6.png'
    }
  ];
  constructor(private lightbox: Lightbox ,private _productService:ProductService
    ,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
       this.id = params['id'];

    });
    this.getProductById();
  }

  getProductById()
  {
       this._productService.getById(this.id).subscribe((result:any)=>{
        this.product=result.result;
       })
  }
  openLightbox(index: number): void {

    this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
  }

  close(): void {
    this.lightbox.close();
  }




}
