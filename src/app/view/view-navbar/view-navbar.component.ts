import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
import { Component, ElementRef, HostListener, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';
import { Subscription } from 'rxjs';
import { ISidebar, SidebarService } from 'src/app/admin/containers/layout/sidebar/sidebar.service';
import { getThemeColor, setThemeColor } from 'src/app/utils/util';
import { environment } from 'src/environments/environment';
import { LangService, Language } from 'src/shared/lang.service';
import { ReadBrandDto, ReadCategoryDto, ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { BrandService } from 'src/shared/services/brand-service/brand.service';

@Component({
  selector: 'app-view-navbar',
  templateUrl: './view-navbar.component.html',
  styleUrls: ['./view-navbar.component.scss']
})
export class ViewNavbarComponent implements OnInit {
  buyUrl = environment.buyUrl;
  adminRoot = environment.adminRoot;
  sidebar: ISidebar;
  subscription: Subscription;
  displayName = 'Sarah Cortney';
  languages: Language[];
  categories: ReadCategoryDto[] = [];
  skinTypes: ReadSkinTypeDto[] = [];
  brands: ReadBrandDto[] = [];

  currentLanguage: string;
  isSingleLang;
  isFullScreen = false;
  isDarkModeActive = false;
  showMobileMenu = false;
  isOpened = false;
  searchKey = '';
  @ViewChild('cont') private cont: ElementRef;
  @ViewChild('navbar') private navbar: ElementRef;
  constructor(
    private sidebarService: SidebarService,
    private router: Router,
    private langService: LangService,
    private scrollToService: ScrollToService,
    private _categoryService: CategoryService,
    private _skinTypeService: SkinTypeService,
    private _brandService: BrandService,
    private renderer: Renderer2, private elRef: ElementRef
  ) {
    this.languages = this.langService.supportedLanguages;
    this.currentLanguage = this.langService.languageShorthand;
    this.isSingleLang = this.langService.isSingleLang;

    this.isDarkModeActive = getThemeColor().indexOf('dark') > -1 ? true : false;
  }

   ngOnInit() {
    this. removeItemFromNavbar();
    this.getCategories();
    this.getSkinTypes();
    this.getBrands();
   
  }
  removeItemFromNavbar(){
    this.router.events.subscribe((event:any) => {
      console.log(event)
      if (event.routerEvent.url.includes('/home')) {
        
        this.navbar.nativeElement.querySelector('li:nth-child(3) a');
        this.navbar.nativeElement.querySelector('li:nth-child(2) a');
        // this.navbar.nativeElement.querySelector('li:nth-child(1) a').classList.add('text-white');
   
  
      } 
      else if (event.routerEvent.url.includes('/news')||event.routerEvent.url.includes('/viewProduct')
      || event.routerEvent.url.includes('/product-details')){
        
        this.navbar.nativeElement.querySelector('li:nth-child(2) a').remove();
        this.navbar.nativeElement.querySelector('li:nth-child(3) a').remove();
      }
    });
  }

  getCategories() {
    this._categoryService.getWithoutPagination().subscribe((responce: any) => {
      this.categories = responce.result
    
    })

  }
  getSkinTypes() {
    this._skinTypeService.getWithoutPagination().subscribe((responce: any) => {
      this.skinTypes = responce.result.data
    
    })

  }
  getBrands() {
    this._brandService.getWithoutPagination().subscribe((responce: any) => {
      this.brands = responce.result.data
     
    })

  }
  onDarkModeChange(event: any): void {
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

  onLanguageChange(lang: any): void {
    this.langService.language = lang.code;
    this.currentLanguage = this.langService.languageShorthand;
  }

  

  menuButtonClick = (
    e: { stopPropagation: () => void },
    menuClickCount: number,
    containerClassnames: string
  ) => {
    if (e) {
      e.stopPropagation();
    }

    setTimeout(() => {
      const event = document.createEvent('HTMLEvents');
      event.initEvent('resize', false, false);
      window.dispatchEvent(event);
    }, 350);

    this.sidebarService.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.sidebar.selectedMenuHasSubItems
    );
  }

  mobileMenuButtonClick(
  ) {

  }

  onSignOut(): void {
    // this.authService.signOut().subscribe(() => {
    //   this.router.navigate(['/']);
    // });
  }
  @HostListener('window:click', ['$event'])
  onClick(event): void {
    this.showMobileMenu = false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event): void {
    this.showMobileMenu = false;
  }

  searchKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.search();
    } else if (event.key === 'Escape') {
      const input = document.querySelector('.mobile-view');
      if (input && input.classList) {
        input.classList.remove('mobile-view');
      }
      this.searchKey = '';
    }
  }

  searchAreaClick(event: any): void {
    event.stopPropagation();
  }
  searchClick(event: any): void {
    if (window.innerWidth < environment.menuHiddenBreakpoint) {
      let elem = event.target;
      if (!event.target.classList.contains('search')) {
        if (event.target.parentElement.classList.contains('search')) {
          elem = event.target.parentElement;
        } else if (
          event.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = event.target.parentElement.parentElement;
        }
      }

      if (elem.classList.contains('mobile-view')) {
        this.search();
        elem.classList.remove('mobile-view');
      } else {
        elem.classList.add('mobile-view');
      }
    } else {
      this.search();
    }
    event.stopPropagation();
  }

  search(): void {
    if (this.searchKey && this.searchKey.length > 1) {
      this.router.navigate([this.adminRoot + '/pages/miscellaneous/search'], {
        queryParams: { key: this.searchKey.toLowerCase().trim() },
      });
      this.searchKey = '';
    }
  }

  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: any): void {
    const input = document.querySelector('.mobile-view');
    if (input && input.classList) {
      input.classList.remove('mobile-view');
    }
    this.searchKey = '';
  }
  scrollTo(target): void {
    const config: ScrollToConfigOptions = {
      target,
      offset: -150
    };

    this.scrollToService.scrollTo(config);
  }
}
