import { Component, Injector, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ReadPageDto } from 'src/shared/service-proxies/service-proxies';
import { CreatePageDialogComponent } from './create-page/create-page-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PageService } from 'src/shared/services/page-service/page.service';
import { AddPageTemplateDialogComponent } from './add-page-template/add-page-template-dialog.component';
import { ContextMenuComponent } from '@perfectmemory/ngx-contextmenu';
import { EditPageDialogComponent } from './edit-page/edit-page-dialog.component';
import { HttpParams } from '@angular/common/http';
import { ViewPageDialogComponent } from './view-page/view-page-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',

})
export class PageComponent extends PagedListingComponentBase<ReadPageDto> {

  title = "Pages"
  displayMode = 'list';
  itemOrder = { label: ("title"), value: "title" };
  itemOptionsOrders = [
    { label: ("Slug"), value: "slug" },
    { label: ("Description"), value: "desc" },
    { label: ("Title"), value: "title" },

  ];

  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadPageDto[] = [];
  data: ReadPageDto[] = [];
  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;
  loading = false;
  ColumnMode = ColumnMode;
  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: CreatePageDialogComponent;

  constructor(
    injector: Injector,
    private _pageService: PageService,
    private _modalService: BsModalService,
    private toastr: ToastrService
  ) {
    super(injector);

  }



  override ngOnInit(): void {

    this.getAllPages(this.itemsPerPage,1)
  }
  getAllPages(itemsPerPage:number,currentPage:number)
  {
   
    this._pageService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
      
      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }

  itemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage=itemsPerPage
    this.getAllPages(this.itemsPerPage,1)
  }

  editModal(id: number) {

  }
  deletebutton(id:number){

    this._pageService.delete(id).subscribe((responce:any)=>{
      this.getAllPages(this.itemsPerPage,1)
      this.toastr.success(responce.message);
    });

  }
  addTemplate(id: number) {

    let addTemplateDialog: BsModalRef;
    addTemplateDialog = this._modalService.show(
      AddPageTemplateDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        // class: 'modal-lg',
        initialState: {
          id: id,
        },

      }
    );
    addTemplateDialog.content.onSave.subscribe(() => {
      this.getAllPages(this.itemsPerPage,1)
    });
  }
  viewPage(id:number)
  {
    this._modalService.show(
      ViewPageDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        initialState: {
          id: id,
        },
      }
    );
  }


  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  pageChanged(event: any): void {
    this.loadData(this.itemsPerPage, event.page, this.search, this.itemOrder.value);
  }

  changeDisplayMode(mode: any): void {
    this.displayMode = mode;
  }

  showAddNewModal(): void {
    let createOrEditPageDialog: BsModalRef;
    createOrEditPageDialog = this._modalService.show(
      CreatePageDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-right',

      }
    );
    createOrEditPageDialog.content.onSave.subscribe(() => {
     this.getAllPages(this.itemsPerPage,1)
    });
  }

  showEditModal(id: number): void {
    let EditPageDialog = this._modalService.show(
      EditPageDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        // class: 'modal-right'
        // ,
        initialState: {
          id: id,
        },
      }
    );
    EditPageDialog.content.onSave.subscribe((respone) => {
      this.refresh();
    });

  }

  ViewDetail(id: number): void {
    // this._modalService.show(
    //   ViewPageDialogComponent,
    //   {
    //     backdrop: true,
    //     ignoreBackdropClick: true,

    //     initialState: {
    //       id: id,
    //     },
    //   }
    // );

  }



  protected delete(entity: ReadPageDto): void {
    // abp.message.confirm(
    //   this.l('PageDeleteWarningMessage', this.selected.length, 'Pages'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._PageService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }

  deleteItem(): void {
    // if (this.selected.length == 0) {
    //   abp.message.info(this.l('YouHaveToSelectOneItemInMinimum'));
    // }
    // else {
    //   abp.message.confirm(
    //     this.l('PageDeleteWarningMessage', this.selected.length, 'Pages'),
    //     undefined,
    //     (result: boolean) => {
    //       if (result) {
    //         this.selected.forEach(element => {
    //           this._PageService.delete(element.id).subscribe(() => {
    //             abp.notify.success(this.l('SuccessfullyDeleted'));
    //             this.refresh();
    //           });
    //         });
    //       }
    //     }
    //   );
    // }
  }

  loadData(pageSize: number = 10, currentPage: number = 1, search: string = '', sort_Field: string = '', sort_Desc: boolean = false): void {
    let request: PagedPagesRequestDto = new PagedPagesRequestDto();
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    request.keyword = search;
    request.sort_Field = sort_Field;
    request.sort_Desc = sort_Desc;
    // request.skipCount = (currentPage - 1) * pageSize;
    // request.maxResultCount = this.itemsPerPage;
    this.list(request, this.pageNumber, () => { });
  }

  searchKeyUp(event: any): void {
    const val = event.target.value.toLowerCase().trim();
    this.loadData(this.itemsPerPage, 1, val, this.itemOrder.value);
  }


  onContextMenuClick(action: string, item: ReadPageDto): void {
    switch (action) {
      case "delete":
        this.delete(item);
        break;
      case "edit":
        this.showEditModal(item.id);
        break;
      // case "view":
      //  this.ViewDetail(item.id);
      default:
        break;
    }
  }

  

  isSelected(p: ReadPageDto): boolean {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }

  onSelect(item: ReadPageDto): void {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    // this.setSelectAllState();
    this.selectedCount = this.selected.length;
  }

  // setSelectAllState(): void {
  //   if (this.selected.length === this.data.length) {
  //     this.selectAllState = 'checked';
  //   } else if (this.selected.length !== 0) {
  //     this.selectAllState = 'indeterminate';
  //   } else {
  //     this.selectAllState = '';
  //   }
  // }

  selectAllChange($event: any): void {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    // this.setSelectAllState();
  }

  // clearFilters(): void {
  //   this.search = '';
  //   this.isActive = undefined;
  //   this.getDataPage(1);
  // }

  protected list(
    request: PagedPagesRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    // request.keyword = this.search;

    // this._PageService
    // .getAll()
    //   .pipe(
    //     finalize(() => {
    //       finishedCallback();
    //     })
    //   )
    //   .subscribe((response:any) => {

    //     this.data = response.result.data;

    //     this.totalItem = response.totalCount;
    //     this.totalPage =  ((response.totalCount - (response.totalCount % this.pageSize)) / this.pageSize) + 1;

    //   });
  }

  setPage($event: any) {
    this.loadData(this.itemsPerPage, 1, this.search, this.itemOrder.value);
  }

  onSort(event: any) {
    this.loading = true;
    const isDesc = event.newValue === 'desc' ? true : false;
    this.loadData(
      this.itemsPerPage,
      1,
      this.search,
      event?.column.prop,
      isDesc
    );

    this.loading = false;

  }
}

class PagedPagesRequestDto extends PagedRequestDto {
  keyword: string;
  sort_Field: string;
  sort_Desc: boolean;
}


