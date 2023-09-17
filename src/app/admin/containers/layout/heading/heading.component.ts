import { Component, HostListener, Input, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import menuItems, { IMenuItem } from '../../../constance/menu';
import { environment } from 'src/environments/environment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ISidebar, SidebarService } from '../sidebar/sidebar.service';
import { LangService, Language } from 'src/shared/lang.service';
import { NewsService } from 'src/shared/services/news-service/news.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent  implements OnInit{
  // @Input() title = '';
  searchKey = '';
  adminRoot = environment.adminRoot;
  showMobileMenu = false;
  modalRef: BsModalRef=new BsModalRef();
  sidebar: ISidebar | any;
  currentLanguage: string;
  languages: Language[];
  news:any[];



  constructor(private router: Router,private modalService: BsModalService,private sidebarService: SidebarService,
    private langService: LangService,private _newsCategory:NewsService){
    this.currentLanguage = this.langService.languageShorthand;
  }
  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews()
  {
     this._newsCategory.getAll().subscribe((response:any)=>{
      this.news=response.result;
      console.log(response);
    })
  }

  mobileMenuButtonClick = (
    event: { stopPropagation: () => void },
    containerClassnames: string
  ) => {
    if (event) {
      event.stopPropagation();
    }
    this.sidebarService.clickOnMobileMenu(containerClassnames);
  }
  onLanguageChange(lang:any): void {
    this.langService.language = lang.code;
    this.currentLanguage = this.langService.languageShorthand;
  }

  // menuButtonClick = (
  //   e: { stopPropagation: () => void },
  //   menuClickCount: number,
  //   containerClassnames: string
  // ) => {
  //   if (e) {
  //      e.stopPropagation();
  //      return 'home';
  //   }

  //   setTimeout(() => {
  //     const event = document.createEvent('HTMLEvents');
  //     event.initEvent('resize', false, false);
  //     window.dispatchEvent(event);
  //   }, 350);

  //   this.sidebarService.setContainerClassnames(
  //     ++menuClickCount,
  //     containerClassnames,
  //     this.sidebar.selectedMenuHasSubItems
  //   );
  // }


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

  searchAreaClick(event:any): void {
    event.stopPropagation();
  }
  searchClick(event:any): void {
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
  handleDocumentClick(event:any): void {
    const input = document.querySelector('.mobile-view');
    if (input && input.classList) {
      input.classList.remove('mobile-view');
    }
    this.searchKey = '';
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  addTagFn(addedName :any): { name: any; tag: true } {
    return { name: addedName, tag: true };
  }
}
