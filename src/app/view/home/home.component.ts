import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Direction } from '@glidejs/glide/components/direction';
import { Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from 'src/environments/environment';
import { LangService, Language } from 'src/shared/lang.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { HttpParams } from '@angular/common/http';
import { ReadCategoryDto, ReadNewsDto, ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';
import { CreateUpdateContactDto } from './../../../shared/service-proxies/service-proxies';
import { ContactUsService } from 'src/shared/services/contact-us/contact-us.service';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { getThemeColor, setThemeColor } from 'src/app/utils/util';
import AOS from "aos";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],


})
export class HomeComponent implements OnInit, OnDestroy {

  baseUrl=environment.baseUrl;
  categoriesLoaded=false;
  showMobileMenu = false;
  glideDataLoad = false;
  adminRoot = environment.adminRoot;
  isDarkModeActive = false;
  products: ReadProductDto[] = [];
  categories: ReadCategoryDto[]=[];
  news: ReadNewsDto[] = [];
  contactUs=new CreateUpdateContactDto();
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService,
    private _productService: ProductService,
    private _newsService:NewsService,
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



  slideItems = [
    {
      icon: 'iconsminds-mouse-3',
      title: 'Right Click Menu',
      detail:
        'Increases overall usability of the project by providing additional actions menu.',
    },
    {
      icon: 'iconsminds-electric-guitar',
      title: 'Video Player',
      detail:
        'Carefully themed multimedia players powered by Video.js library with Youtube support.',
    },
    {
      icon: 'iconsminds-keyboard',
      title: 'Keyboard Shortcuts',
      detail:
        'Easily configurable keyboard shortcuts plugin that highly improves user experience.',
    },
    {
      icon: 'iconsminds-three-arrow-fork ',
      title: 'Two Panels Menu',
      detail:
        'Three states two panels icon menu that looks good, auto resizes and does the job well.',
    },
    {
      icon: 'iconsminds-deer',
      title: 'Icons Mind',
      detail:
        '1040 icons in 53 different categories, designed pixel perfect and ready for your project.',
    },
    {
      icon: 'iconsminds-palette',
      title: '20 Color Schemes',
      detail:
        'Colors, icons and design harmony that creates excellent themes to cover entire project.',
    },
    {
      icon: 'iconsminds-air-balloon-1',
      title: '3 Applications',
      detail:
        'Applications that mostly made of components are the way to get started to create something similar.',
    },
    {
      icon: 'iconsminds-resize',
      title: 'Extra Responsive',
      detail:
        'Custom Bootstrap 4 xxs & xxl classes delivers better experiences for smaller and larger screens.',
    },
  ];

  sliderImages=[
    {imagePath:"../../../assets/img/NEWS/t.jpg"},
    {imagePath:"../../../assets/img/NEWS/u.jpg"},
    {imagePath:"../../../assets/img/NEWS/y.jpg"},
    {imagePath:"../../../assets/img/NEWS/r.jpg"},
    {imagePath:"../../../assets/img/NEWS/e.jpg"},
  ]

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
  isLoading: boolean = false

  GoToNewsPage() {
    this._route.navigate(['news'])
  this.isLoading = true
  }
  save(){

    this._contactUsService.insert(this.contactUs).subscribe((responce: any) => {

      if(responce.success)
      {  console.log("hello they")
         this.toastr.success('Message Sent');}
    });
    this.contactUs=new CreateUpdateContactDto()
  }



  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'no-footer');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    const homeRect = this.elRef.nativeElement
      .querySelector('.home-row')
      .getBoundingClientRect();

    const homeSection = this.elRef.nativeElement.querySelector(
      '.landing-page .section.home'
    );
    homeSection.style.backgroundPositionX = homeRect.x - 580 + 'px';

    const footerSection = this.elRef.nativeElement.querySelector(
      '.landing-page .section.footer'
    );
    footerSection.style.backgroundPositionX = event.target.innerWidth - homeRect.x - 2000 + 'px';

    if (event.target.innerWidth >= 992) {
      this.renderer.removeClass(
        this.elRef.nativeElement.querySelector('.landing-page'),
        'show-mobile-menu'
      );
    }
  }

  @HostListener('window:click', ['$event'])
  onClick(event): void {
    this.showMobileMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.showMobileMenu = false;

  }

  scrollTo(target): void {
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };

    this.scrollToService.scrollTo(config);
  }


  isScrolled = false;

@HostListener("window:scroll")
scrollEvent() {
  this.isScrolled = window.pageYOffset >= 80;
}


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











export interface IKnowledgeBase {
  title: string;
  icon: string;
  detail: string;
  subtitles: IKnowledgeBaseSubTitle[];
}
export interface IKnowledgeBaseSubTitle {
  title: string;
  link: string;
}

const data: IKnowledgeBase[] = [
  {
    title: 'USING VIEN',
    icon: 'iconsminds-director ',
    detail: 'Systems thinking correlation, social impact; when revolutionary fully ethical life bandwidth and thought partnership.',
    subtitles: [
      {
        title: 'Getting Started',
        link: '#'
      },
      {
        title: 'Game Changing Features',
        link: '#'
      },
      {
        title: 'Structure',
        link: '#'
      },
      {
        title: 'Adding Content',
        link: '#'
      },
      {
        title: 'Gulp & Package.json',
        link: '#'
      },
      {
        title: 'Codebase',
        link: '#'
      },
      {
        title: 'Styles and Themes',
        link: '#'
      },
      {
        title: 'Fonts',
        link: '#'
      },
      {
        title: 'Plugins',
        link: '#'
      },
      {
        title: 'Changelog',
        link: '#'
      }
    ]
  },
  {
    title: 'SECURITY',
    icon: 'iconsminds-security-settings ',
    detail: 'Tellus a sem condimentum, vitae convallis sapien feugiat. Aenean non nibh nec nunc aliquam iaculis. Ut quis suscipit nunc. Duis at lectus a est aliquam venenatis vitae eget arcu.',
    subtitles: [
      {
        title: 'Securing Your Account',
        link: '#'
      },
      {
        title: 'Privacy',
        link: '#'
      },
      {
        title: 'Spam',
        link: '#'
      },
      {
        title: 'Sensitive Content',
        link: '#'
      },
      {
        title: 'Abuse',
        link: '#'
      },
      {
        title: 'Blocking Users',
        link: '#'
      },
      {
        title: 'Reporting',
        link: '#'
      }
    ]
  },
  {
    title: 'ACCOUNT',
    icon: 'iconsminds-male',
    detail: 'Squid single-origincoffeenulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beerlaborewes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butchervice lomo.',
    subtitles: [
      {
        title: 'Login and Register',
        link: '#'
      },
      {
        title: 'Password Reset',
        link: '#'
      },
      {
        title: 'Devices',
        link: '#'
      },
      {
        title: 'Integrations',
        link: '#'
      },
      {
        title: 'Notifications',
        link: '#'
      },
      {
        title: 'Messages',
        link: '#'
      },
      {
        title: 'Blocking Users',
        link: '#'
      },
      {
        title: 'Following Users',
        link: '#'
      },
      {
        title: 'Login',
        link: '#'
      },
      {
        title: 'Content Filters',
        link: '#'
      }
    ]
  },
  {
    title: 'POLICIES',
    icon: 'iconsminds-newspaper',
    detail: 'Duis at lectus a est aliquam venenatis vitae eget arcu. Sed egestas felis eget convallis maximus. Curabitur maximus.',
    subtitles: [
      {
        title: 'About',
        link: '#'
      },
      {
        title: 'Policies',
        link: '#'
      },
      {
        title: 'Privacy',
        link: '#'
      },
      {
        title: 'Ad Choices',
        link: '#'
      },
      {
        title: 'Researches and Experiments',
        link: '#'
      },
      {
        title: 'General Guidelines',
        link: '#'
      },
      {
        title: 'Cookies',
        link: '#'
      }
    ]
  }
];
export default data;

