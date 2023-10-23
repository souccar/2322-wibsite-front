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

  product:ProductDto[]=[];
  images: ImageModel[]=[];
  baseUrl=environment.baseUrl;
  id:number;
  isLoading:boolean = false ;

  constructor(private lightbox: Lightbox ,private _productService:ProductService
    ,private route:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.images=[];
    this.route.params.subscribe(params => {
       this.id = params['id'];

    });
    this.getProductById();
  }

  getProductById()
  {
    this._productService.getAll().subscribe((response:any)=>{
      this.product=response.result.data;
      this.isLoading = true;
      console.log(this.product)
      // this.images = response.result.images;
      // this.isLoading = true;
      // console.log(this.isLoading)
      // console.log(this.images)

      //  response.result.images.forEach((element:any)=>{

      //   this.images.push(element.imagePath)
      //   console.log(this.images)
      //  })




    });

    console.log(this.isLoading )
  }
  openLightbox(index: number): void {
    console.log(index);
    // this.lightbox.open(this.album, index, {centerVertically: true, positionFromTop: 0, disableScrolling: true, wrapAround: true});
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
