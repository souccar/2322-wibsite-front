import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Direction } from '@glidejs/glide/components/direction';
import { Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { environment } from 'src/environments/environment';
import { LangService, Language } from 'src/shared/lang.service';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { HttpParams } from '@angular/common/http';
import { ReadNewsDto, ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';
import { CreateUpdateContactDto } from './../../../shared/service-proxies/service-proxies';
import { ContactUsService } from 'src/shared/services/contact-us/contact-us.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
 

})
export class HomeComponent implements OnInit, OnDestroy {

  products: ReadProductDto[] = [];
  news: ReadNewsDto[] = [];
  contactUs=new CreateUpdateContactDto();
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService,
    private _productService: ProductService,
    private _newsService:NewsService,
    private _contactUsService:ContactUsService,
    private toastr: ToastrService) { }

  showMobileMenu = false;
  glideDataLoad = false;

  baseUrl = environment.baseUrl;
  adminRoot = environment.adminRoot;

  slideSettings = {
    type: 'carousel',
    gap: 30,
    perView: 4,
    hideNav: true,
    peek: { before: 10, after: 10 },
    breakpoints: {
      600: { perView: 1 },
      992: { perView: 2 },
      1200: { perView: 3 },
    },
  };


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
  Prouduct = [
    {
      title: 'Category',
      path: `${this.adminRoot}/applications/survey`,
      img: '/assets/img/landing-page/applications/survey.jpg',
    },
    {
      title: 'Skin Type',
      path: `${this.adminRoot}/applications/chat`,
      img: '/assets/img/landing-page/applications/chat.jpg',
    },
    {
      title: 'Brand',
      path: `${this.adminRoot}/applications/todo`,
      img: '/assets/img/landing-page/applications/todo.jpg',
    },
  ];


  getProduct() {

    let params = new HttpParams().set('count', 10);
    this._productService.getAll(params).subscribe((responce: any) => {

      this.products = responce.result.data;
      this.glideDataLoad = true;
      console.log(this.products)
    });

  }
  getLastNews(){
    // let params = new HttpParams().set('count', 10);
    this._newsService.getlastNews().subscribe((responce: any) => {

      this.news = responce.result;
      console.log(responce)
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

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'no-footer');
    this.getProduct();
    this.getLastNews();
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
}
