import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Direction } from '@glidejs/glide/components/direction';
import { Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from 'src/environments/environment';
import { LangService, Language } from 'src/shared/lang.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { HttpParams } from '@angular/common/http';
import { ReadCategoryDto, ReadNewsDto, ReadProductDto, ReadSliderDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';
import { CreateUpdateContactDto } from './../../../shared/service-proxies/service-proxies';
import { ContactUsService } from 'src/shared/services/contact-us/contact-us.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { getThemeColor, setThemeColor } from 'src/app/utils/util';
import AOS from "aos";
import { SliderService } from 'src/shared/services/slider/slider.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


})
export class HomeComponent implements OnInit, OnDestroy {
  isFullScreen = false;
  baseUrl=environment.baseUrl;
  categoriesLoaded=false;
  displayName = 'Sarah Cortney';
  showMobileMenu = false;
  glideDataLoad = false;
  adminRoot = environment.adminRoot;
  isDarkModeActive = false;
  products: ReadProductDto[] = [];
  categories: ReadCategoryDto[]=[];
  sliderImages:ReadSliderDto[]=[];
  news: ReadNewsDto[] = [];
  contactUs=new CreateUpdateContactDto();
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService,
    private _productService: ProductService,
    private _newsService:NewsService,
    private _sliderService:SliderService,
    private _contactUsService:ContactUsService,
    private toastr: ToastrService,
    private _categoryService:CategoryService,
    private _route:Router) {
      this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;
     }

    ngOnInit(): void {

      AOS.init();
      this.renderer.addClass(document.body, 'no-footer');
      this.getProduct();
      this.getLastNews();
      this. getCategories();
      this.getAllSlider();
    }


  slideSettings = {
    type: 'carousel',
    gap: 30,
    perView: 3,
    hideNav: true,
    peek: { before: 10, after: 10 },
    breakpoints: {
      600: { perView: 1 },
      992: { perView: 2 },
      1200: { perView: 3 } }
    }




    



  // sliderImages=[
  //   {imagePath:"../../../assets/img/NEWS/t.jpg"},
  //   {imagePath:"../../../assets/img/NEWS/u.jpg"},
  //   {imagePath:"../../../assets/img/NEWS/y.jpg"},
  //   {imagePath:"../../../assets/img/NEWS/r.jpg"},
  //   {imagePath:"../../../assets/img/NEWS/e.jpg"},
  // ]

  getAllSlider()
  {
    this._sliderService.getAll().subscribe((response:any)=>{
      console.log(response.result);
      this.sliderImages=response.result;
    })
  }

  contactData=[{
    DepartmentName:'Sales Department',
    telephone:'+ (963) 11 543 4200 / Ext. 1624',
    fax:'+ (963) 11 543  4217',
    email:'sales@ahc-me.net',
    icon:'simple-icon-basket-loaded'

  },
  {
    DepartmentName:'Marketing Department',
    telephone:'+ (963) 11 543 4200 Ext. 1626',
    fax:'+ (963) 11 543 4217',
    email:'marketing@ahc-me.net',
    icon:'simple-icon-credit-card'


  },{
    DepartmentName:'Business Development Department',
    telephone:'+ (963) 11 543 4200  Ext. 1625',
    fax:'+ (963) 11 5434217',
    email:'bd@ahc-me.net',
    icon:'simple-icon-briefcase'


  },{
    DepartmentName:'General inquiries',
    telephone:'+ (963) 11 543 4200Ext. 1622',
    fax:'+ (963) 11 543 4217',
    email:'info@ahc-me.net',
    icon:'simple-icon-globe-alt'


  }]

  fullScreenClick(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  handleFullscreen(event:any): void {
    if (document.fullscreenElement) {
      this.isFullScreen = true;
    } else {
      this.isFullScreen = false;
    }
  }
  onSignOut(): void {
    // this.authService.signOut().subscribe(() => {
    //   this.router.navigate(['/']);
    // });
  }


  onDarkModeChange(event): void {

    let color = getThemeColor();
    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    setThemeColor(color);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }
  getCategories(){
    this._categoryService.getAll().subscribe((responce:any)=>{
      this.categoriesLoaded=true
      this.categories=responce.result
      console.log(this.categories)
    })

  }

  getProduct() {

    let params = new HttpParams().set('count', 10);
    this._productService.getAll(params).subscribe((responce: any) => {

      this.products = responce.result.data;
      this.glideDataLoad = true;


    });

  }
  viewProduct()
  {
    this._route.navigate(['viewProducts'])
  }

  getLastNews(){


    this._newsService.getlastNews().subscribe((responce: any) => {

      this.news = responce.result;


    });
  }
  save(){
    console.log(this.contactUs);
    this._contactUsService.insert(this.contactUs).subscribe((responce: any) => {
      console.log(responce)
      if(responce.success)
      {  console.log("hello they")
         this.toastr.success('Message Sent');}
    });
    this.contactUs=new CreateUpdateContactDto()
  }



  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-footer');
  }

//   @HostListener('window:resize', ['$event'])
//   onResize(event): void {
//     const homeRect = this.elRef.nativeElement
//       .querySelector('.home-row')
//       .getBoundingClientRect();

//     const homeSection = this.elRef.nativeElement.querySelector(
//       '.landing-page .section.home'
//     );
//     homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';

//     const footerSection = this.elRef.nativeElement.querySelector(
//       '.landing-page .section.footer'
//     );
//     footerSection.style.backgroundPositionX = event.target.innerWidth - homeRect.x - 2000 + 'px';

//     if (event.target.innerWidth >= 992) {
//       this.renderer.removeClass(
//         this.elRef.nativeElement.querySelector('.landing-page'),
//         'show-mobile-menu'
//       );
//     }
//   }

//   @HostListener('window:click', ['$event'])
//   onClick(event): void {
//     this.showMobileMenu = false;
//   }

//   @HostListener('window:scroll', ['$event'])
//   onScroll(event): void {
//     this.showMobileMenu = false;
//   }

  scrollTo(target): void {
    
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };
    
    this.scrollToService.scrollTo(config);
  }


  isScrolled = false;

// @HostListener("window:scroll")
// scrollEvent() {
//   this.isScrolled = window.pageYOffset >= 80;
// }


// onPageScroll() {
//   // Get the current scroll position
//   const scrollY = window.scrollY;
//   console.log('onScroll called');

//   // Change the text color based on the scroll position
//   if (scrollY > 80) {
//     console.log(scrollY)
//   } else {
//     console.log('nop')
//   }
// }
}












