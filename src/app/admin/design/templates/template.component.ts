import { Component, Injector, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ReadTemplateDto } from 'src/shared/service-proxies/service-proxies';
import { CreateTemplateDialogComponent } from './create-template/create-template-dialog.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateService } from 'src/shared/services/template/template.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent extends PagedListingComponentBase<ReadTemplateDto> {

  title = "Template"
  displayMode = 'list';
  itemOrder = { label:("title"), value: "title" };
  itemOptionsOrders = [
    { label: ("Type"), value: "type" },
    { label: ("Description"), value: "description" },
    { label: ("Title"), value: "title" },

  ];

  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadTemplateDto[] = [];
  data: ReadTemplateDto[] = [];
  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;

  //
  loading = false;

  ColumnMode = ColumnMode;
  // @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: CreateTemplateDialogComponent;

  constructor(
    injector: Injector,
    private _templateService:TemplateService,
    private _modalService: BsModalService,
    ) {
    super(injector);

  }

  override ngOnInit(): void {
     this.getAllTemplates()
    this.loadData(this.itemsPerPage, 1, this.search, this.itemOrder.value);
  }

  getAllTemplates()
  {
    this._templateService.getTemplates().subscribe((response:any)=>{
      console.log(response);
       this.data=response.result;
       console.log(this.data);

    })
  }
  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  pageChanged(event: any): void {
    this.loadData(this.itemsPerPage, event.page, this.search, this.itemOrder.value);
  }

  changeDisplayMode(mode:any): void {
    this.displayMode = mode;
  }

  showAddNewModal(): void {
    let createOrEditProductDialog: BsModalRef;
    createOrEditProductDialog = this._modalService.show(
      CreateTemplateDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg',

      }
    );
    createOrEditProductDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  showEditModal(id:number): void {
      // let EditProductDialog = this._modalService.show(
      //   EditProductDialogComponent,
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
      // EditProductDialog.content.onSave.subscribe((respone) => {
      //   this.refresh();
      // });

  }

  ViewDetail(id:number): void
  {
    // this._modalService.show(
    //   ViewProductDialogComponent,
    //   {
    //     backdrop: true,
    //     ignoreBackdropClick: true,

    //     initialState: {
    //       id: id,
    //     },
    //   }
    // );

  }



  protected delete(entity: ReadTemplateDto): void {
    // abp.message.confirm(
    //   this.l('ProductDeleteWarningMessage', this.selected.length, 'Products'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._productService.delete(entity.id).subscribe(() => {
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
    //     this.l('ProductDeleteWarningMessage', this.selected.length, 'Products'),
    //     undefined,
    //     (result: boolean) => {
    //       if (result) {
    //         this.selected.forEach(element => {
    //           this._productService.delete(element.id).subscribe(() => {
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
    let request: PagedTemplateRequestDto = new PagedTemplateRequestDto();
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

  searchKeyUp(event:any): void {
    const val = event.target.value.toLowerCase().trim();
    this.loadData(this.itemsPerPage, 1, val, this.itemOrder.value);
  }


  onContextMenuClick(action: string, item: ReadTemplateDto): void {
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

  itemsPerPageChange(perPage: any): void {
    this.loadData(perPage, 1, this.search, this.itemOrder.value);
  }

  isSelected(p: ReadTemplateDto): boolean {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }

  onSelect(item: ReadTemplateDto): void {
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

  selectAllChange($event:any): void {
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
    request: PagedTemplateRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    // request.keyword = this.search;

    // this._productService
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

  setPage($event:any){
    this.loadData(this.itemsPerPage, 1, this.search, this.itemOrder.value);
  }

  onSort(event:any) {
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

class PagedTemplateRequestDto extends PagedRequestDto {
  keyword: string;
  sort_Field: string;
  sort_Desc: boolean;
}


