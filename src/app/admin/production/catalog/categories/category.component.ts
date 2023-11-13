import { Component, Injector, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
// import { ContextMenuComponent } from 'ngx-contextmenu';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { CreateCategoryDialogComponent } from './create-category/create-category-dialog.component';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { ReadCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { finalize } from 'rxjs';
import { EditCategoryDialogComponent } from './edit-category/edit-category-dialog.component';
import { ViewCategoryDialogComponent } from './view-category/view-category-dialog.component';
import { ContextMenuComponent } from '@perfectmemory/ngx-contextmenu';
import { HttpParams } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

// import { ContextMenuComponent } from 'ngx-contextmenu';
class PagedCategoriesRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',

})

export class CategoryComponent extends PagedListingComponentBase<ReadCategoryDto> {
  title = "Categories"
  displayMode = 'list';
  itemOrder = { label: "name", value: "name" };
  itemOptionsOrders = [{ label:"name", value: "name" },
  { label: "description", value: "description" },
  { label:"point", value: "point" }];
  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadCategoryDto[] = [];
   data: ReadCategoryDto[] = [];

  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;
  loading = false;
  ColumnMode = ColumnMode;
  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent ;

  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _categoryService:CategoryService,
    private toastr: ToastrService)
  {
    super(injector);

   

  }

  override ngOnInit(): void {

    this.getAllCategory(this.itemsPerPage,1)
  }
  getAllCategory(itemsPerPage:number,currentPage:number)
  {
   
    this._categoryService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
     

      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }
  itemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage=itemsPerPage
    this.getAllCategory(this.itemsPerPage,1)
  }
  pageChanged(event: any): void {
   
      this.getAllCategory(this.itemsPerPage,event.page);
  
  }
  
  searchKeyUp(event:any): void {
    const val = event.target.value.toLowerCase().trim();
    // this.loadData(this.itemsPerPage, 1, val, this.itemOrder.value);
  }

  selectAllChange($event:any): void {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }
  setSelectAllState(): void {
    if (this.selected.length === this.data.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
    this.setSelectAllState();
  }
 
  changeDisplayMode(mode:any): void {
    this.displayMode = mode;
  }
  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  onContextMenuClick(action: string, item: ReadCategoryDto): void {
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
  deletebutton(id:number){
    this._categoryService.delete(id).subscribe((responce:any)=>{
      this.getAllCategory(this.itemsPerPage,1)
      this.toastr.success(responce.message);
    });

  }
  showViewModal(id:number)
{
  //  this._modalService.show(
  //   ViewCategoryDialogComponent,
  //   {
  //     backdrop: true,
  //     ignoreBackdropClick: true,
  //     initialState: {
  //       id: id,
  //     },
  //   }
  // );

}
editModal(id:number): void {
  let editCategoryDialog: BsModalRef;
  editCategoryDialog = this._modalService.show(
      EditCategoryDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        
        initialState: {
          id: id,
        },
      }
    );
    editCategoryDialog.content.onSave.subscribe(() => {
      this.getAllCategory(this.itemsPerPage,1)
    });

}
viewModal(id:number)
{
  this._modalService.show(
    ViewCategoryDialogComponent,
    {
      backdrop: true,
      ignoreBackdropClick: true,
      initialState: {
        id: id,
      },
    }
  );
}
  // entity: ReadCategoryDto
  protected delete(entity:any): void {
    // abp.message.confirm(
    //   this.l('CategoryDeleteWarningMessage', this.selected.length, 'Categories'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._CategoryService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }
  showAddNewModal(): void {
    let createOrEditCategoryDialog: BsModalRef;
    createOrEditCategoryDialog = this._modalService.show(
      CreateCategoryDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg',

      }
    );
    createOrEditCategoryDialog.content.onSave.subscribe(() => {
      this.getAllCategory(this.itemsPerPage,1)
    });
  }
  // item: ReadCategoryDto
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
      //   'CategoryDeleteWarningMessage', this.selected.length, 'Categories',
      //   undefined,
        // (result: boolean) => {
        //   if (result) {
        //     this.selected.forEach(element => {
        //       this._CategoryService.delete(element.id).subscribe(() => {
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
    let request: PagedCategoriesRequestDto = new PagedCategoriesRequestDto();
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    request.keyword = search;
    request.sort_Desc = sort_Desc;
    // request.isActive = this.isActive;
    request.skipCount = (currentPage - 1) * pageSize;
    request.maxResultCount = this.itemsPerPage;
    // this.list(request, this.pageNumber, () => { });
  }
  protected list(
    request: PagedCategoryRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.search;

    // this._productService
    //   .getAllWithInput(
    //     request.keyword,
    //     request.sort_Field,
    //     request.sort_Desc,
    //     request.skipCount,
    //     request.maxResultCount,
    //   )
    //   .pipe(
    //     finalize(() => {
    //       finishedCallback();
    //     })
    //   )
      // .subscribe((result:any) => {

      //   this.data = result.items;

      //   this.totalItem = result.totalCount;
      //   this.totalPage =  ((result.totalCount - (result.totalCount % this.pageSize)) / this.pageSize) + 1;
      //   this.setSelectAllState();
      // });
  }
}
class PagedCategoryRequestDto extends PagedRequestDto {
  keyword: string;
  sort_Field: string;
  sort_Desc: boolean;
}
