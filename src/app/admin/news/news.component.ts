import { Component, Injector, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ReadNewsDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';
import { CreateNewsDialogComponent } from './create-news/create-news-dialog.component';
import { EditNewsDialogComponent } from './edit-news/edit-news-dialog.component';
import { HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',

})
export class NewsComponent extends PagedListingComponentBase<ReadNewsDto>  implements OnInit {


  protected override list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    // throw new Error('Method not implemented.');
  }

  title = "News"
  displayMode = 'list';
  itemOrder = { label: "title", value: "title" };
  itemOptionsOrders = [{ label:"title", value: "title" },
      { label:"description", value: "description" },];
  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadNewsDto[] = [];
  data: ReadNewsDto[] = [];
  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;
  loading = false;
  ColumnMode = ColumnMode;
  currentPageEvent = 4;
  page: number;
  limitsMaxSize = 5;
  limitsTotalItems = 175;
  limitsCurrentPage = 1;


  setPage(pageNo: number): void {
    this.currentPage = pageNo;
  }


  // @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;

  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _newsService:NewsService,
    private toastr: ToastrService)
  {

    super(injector);
  }
  override ngOnInit(): void {

    this.getAllNews(this.itemsPerPage,1)
  }

  getAllNews(itemsPerPage:number,currentPage:number)
  {

    this._newsService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{

      this.data=response.result;
      this.totalItem=response.result.total
    })
  }

  pageChanged(event: any): void {

      this.getAllNews(this.itemsPerPage,event.page);

  }
  deletebutton(id:number){
    this._newsService.delete(id).subscribe((responce:any)=>{
      this.getAllNews(this.itemsPerPage,1)
      this.toastr.success(responce.message);
    });

  }

  editModal(id:number): void {
    let editNewsDialog: BsModalRef;
        editNewsDialog = this._modalService.show(
        EditNewsDialogComponent,
        {
          backdrop: true,
          ignoreBackdropClick: true,
          
          initialState: {
            id: id,
          },
        }
      );
      editNewsDialog.content.onSave.subscribe(() => {
        this.getAllNews(this.itemsPerPage,1)
      });

    }


    itemsPerPageChange(itemsPerPage: any): void {
      this.itemsPerPage=itemsPerPage
      this.getAllNews(this.itemsPerPage,1)
    }

  searchKeyUp(event:any): void {
    const val = event.target.value.toLowerCase().trim();
    this.loadData(this.itemsPerPage, 1, val);
  }

  selectAllChange($event:any): void {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }
  changeDisplayMode(mode:any): void {
    this.displayMode = mode;
  }

  setSelectAllState(): void {
    if (this.selected.length === this.data.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }
  // protected list(
  //   request: PagedNewsRequestDto,

  //   finishedCallback: Function
  // ): void {
  //   request.keyword = this.search;

  //   this._newsService
  //    .getAll()
  //     .pipe(
  //       finalize(() => {
  //         finishedCallback();
  //       })
  //     )
  //     .subscribe((result :any) => {
  //       this.data = result.data;
  //       // this.setSelectAllState();
  //     });
  // }


  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  onContextMenuClick(action: string, item: ReadNewsDto): void {
    switch (action) {
      case "delete":
        this.delete(item);
        break;
      case "edit":
        this.editModal(item.id);
        break;
      case "view":
        this.showViewModal(item.id);
       break;

      default:
        break;
    }
  }
  showViewModal(id:number)
{
  //  this._modalService.show(
  //   ViewNewsDialogComponent,
  //   {
  //     backdrop: true,
  //     ignoreBackdropClick: true,
  //     initialState: {
  //       id: id,
  //     },
  //   }
  // );

}
  showEditModal(id:number): void {
    // let EditNewsDialog = this._modalService.show(
    //   EditNewsDialogComponent,
    //   {
    //     backdrop: true,
    //     ignoreBackdropClick: true,
    //     class: 'modal-right'
    //     ,
    //     initialState: {
    //       id: id,
    //     },
    //   }
    // );
    // EditNewsDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });

}
  // entity: ReadNewsDto
  protected delete(entity:any): void {
    // abp.message.confirm(
    //   this.l('NewsDeleteWarningMessage', this.selected.length, 'Categories'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._NewsService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }
  showAddNewModal(): void {
    let createOrEditNewsDialog: BsModalRef;
    createOrEditNewsDialog = this._modalService.show(
      CreateNewsDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg',

      }
    );
    createOrEditNewsDialog.content.onSave.subscribe(() => {
      this.getAllNews(this.itemsPerPage,1)
    });
  }
  // item: ReadNewsDto
  onSelect(item: any): void {
    // if (this.isSelected(item)) {
    //   this.selected = this.selected.filter(x => x.id !== item.id);
    // } else {
    //   this.selected.push(item);
    // }
    // this.setSelectAllState();
    // this.selectedCount = this.selected.length;
  }
  deleteItem(): void {
    if (this.selected.length == 0) {
      // abp.message.info('YouHaveToSelectOneItemInMinimum');
    }
    else {
      // abp.message.confirm(
      //   'NewsDeleteWarningMessage', this.selected.length, 'Categories',
      //   undefined,
        // (result: boolean) => {
        //   if (result) {
        //     this.selected.forEach(element => {
        //       this._NewsService.delete(element.id).subscribe(() => {
        //         abp.notify.success(this.l('SuccessfullyDeleted'));
        //         this.refresh();
        //       });
        //     });
        //   }
        // }
      // );
    }
  }

  loadData(pageSize: number = 10, currentPage: number = 1, search: string = '', sort_Desc: boolean = false): void {
    let request: PagedNewsRequestDto = new PagedNewsRequestDto();
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    request.keyword = search;
    request.sort_Desc = sort_Desc;
    request.skipCount = (currentPage - 1) * pageSize;
    request.maxResultCount = this.itemsPerPage;
    // this.list(request, () => { });
  }
}

class PagedNewsRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}
