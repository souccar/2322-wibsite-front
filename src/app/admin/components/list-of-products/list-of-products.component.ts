import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateUpdateProductDto, ReadBrandDto, ReadCategoryDto, ReadProductDto, ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent implements OnInit{
  carouselItems:any[]=[
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
  }]
  groups = [
    {
      title: 'Hair Care',
      content: 'MMT Care'
    },
    {
      title: 'Skin Care',
      content: 'MMT Skin Care'
    },
    {
      title: 'Sunscreen',
      content: 'MMT Sunscreen'
    },
    {
      title: 'Sunscreen MMT',
      content: 'Sunscreen MMT'
    }
  ];
  isloading:boolean=false;
  baseUrl=environment.baseUrl;
  products:ReadProductDto[]=[];
  skinTypes:ReadSkinTypeDto[]=[];
  brands:ReadBrandDto[]=[];
  categories:ReadCategoryDto[]=[];
  constructor(private _productService:ProductService,
    private _skinTypeService:SkinTypeService,
    private _categoryService:CategoryService,
    private _brandService:BrandService){}
  ngOnInit(): void {
    this.getProducts();
    this.getSkinType();
    this.getBrand();
    this.getCategory();

  }

  getProducts()
  {

    this._productService.getAll().subscribe((response:any)=>{
      // response.result.data.forEach(element => {
      //    const product=new ReadProductDto();
      //    product.id=element.id;
      //    product.name=element.name;
      //    product.category=element.category;
      //    product.skinType=element.skinType;
      //    product.brand=element.brand;
      //    product.images=element.product_images;
      //    this.products.push(product)

      // });

      this.products=response.result.data;
      this.isloading=true;


    })

  }
  getSkinType()
  {
    this._skinTypeService.getAll().subscribe((response:any)=>{

      this.skinTypes=response.result.data;
      console.log(this.skinTypes)


    })


  }
  getBrand()
  {
    this._brandService.getAll().subscribe((response:any)=>{

      this.brands=response.result.data;
      console.log(this.brands)


    })


  }
  getCategory()
  {
    this._categoryService.getAll().subscribe((response:any)=>{

      this.categories=response.result;
      console.log(this.categories)


    })


  }
}
