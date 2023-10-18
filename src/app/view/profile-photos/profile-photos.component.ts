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

  product:ProductDto=new ProductDto();
  images: ImageModel[]=[];
  baseUrl=environment.baseUrl;
  id:number;
  isLoading = false ;
  album:{ src: string,thumb: string } []= []

  constructor(private lightbox: Lightbox ,private _productService:ProductService
    ,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.images=[];
    this.product.images=[];
    this.route.params.subscribe(params => {
       this.id = params['id'];

    });
    
    this.getProductById();
  }

  getProductById()
  {
    this._productService.getById(this.id).subscribe((response:any)=>{
        
      this.product=response.result;
      this.images = response.result.images;
       response.result.images.forEach((element:any)=>{
        this.images.push(element.imagePath)
        this.album.push({src:this.baseUrl+element.imagePath,thumb:this.baseUrl+element.imagePath})
       })
       console.log(this.album);
       this.isLoading=true
    })


  }
  openLightbox(index: number): void {
    
    this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
  }

  close(): void {
    this.lightbox.close();
  }




}


export class ProductDto {
  id: number;
  name: string | undefined;
  description: string | undefined;
  point: number;
  category:{id:number ,name:string};
  // parentCategoryId: number | undefined;
  images: any[];
  sizes: any[];
  skinType:{id:number ,name:string};
  brand:{id:number ,name:string}


}

export class ImageModel{

  base64:string;
  id:number;
  imagePath:string;

}
