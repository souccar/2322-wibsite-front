import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
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
})
export class HomeComponent implements OnInit, OnDestroy {
  isFullScreen = false;
  baseUrl = environment.baseUrl;
  displayName = 'Sarah Cortney';
  showMobileMenu = false;
  adminRoot = environment.adminRoot;
  isDarkModeActive = false;
  glideDataLoad = false;
 
 
  constructor(private renderer: Renderer2, private elRef: ElementRef, private scrollToService: ScrollToService,
    private toastr: ToastrService,
    private _route: Router) {
    this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;
  }

  ngOnInit(): void {

    AOS.init();
    let scrollRef = 0;

    window.addEventListener('scroll', function () {
      scrollRef <= 2 ? scrollRef++ : AOS.refresh();
    });
    this.renderer.addClass(document.body, 'no-footer');
  

  
  
   
  }



 



  fullScreenClick(): void {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  @HostListener('document:fullscreenchange', ['$event'])
  handleFullscreen(event: any): void {
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


  viewProduct() {
    this._route.navigate(['viewProducts'])
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












