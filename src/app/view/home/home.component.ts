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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit, OnDestroy {

  products: ReadProductDto[] = [];
  news: ReadNewsDto[] = [];
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService,
    private _productService: ProductService,
    private _newsService:NewsService) { }

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
