import { Component, Injector, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { CreateCategoryDialogComponent } from './create-category/create-category-dialog.component';
class PagedCategoriesRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {
  title = "Categories"
  displayMode = 'list';
  itemOrder = { label: "name", value: "name" };
  itemOptionsOrders = [{ label:"name", value: "name" },
  { label: "description", value: "description" }];
  itemsPerPage = 10;
  selectAllState = '';
  // selected: ReadCategoryDto[] = [];
   selected:any= '';

  // data: ReadCategoryDto[] = [];
  data:any;
  // parentCategoryFullName:CategoryForDropdownDto[]=[];
  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;
  loading = false;
  ColumnMode = ColumnMode;
  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent | undefined;

  constructor( injector: Injector,
    private _modalService: BsModalService,)
  {}

  itemsPerPageChange(perPage: number): void {
    // this.loadData(perPage, 1, this.search, this.itemOrder.value);
  }

  searchKeyUp(event:any): void {
    const val = event.target.value.toLowerCase().trim();
    // this.loadData(this.itemsPerPage, 1, val, this.itemOrder.value);
  }

  selectAllChange($event:any): void {
    if ($event.target.checked) {
      // this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    // this.setSelectAllState();
  }
  changeDisplayMode(mode:any): void {
    this.displayMode = mode;
  }
  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }
  // item: ReadCategoryDto
  onContextMenuClick(action: string, item: any): void {
    switch (action) {
      case "delete":
        this.delete(item);
        break;
      case "edit":
        this.showEditModal(item.id);
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
  showEditModal(id:number): void {
    // let EditCategoryDialog = this._modalService.show(
    //   EditCategoryDialogComponent,
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
    // EditCategoryDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });

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
        class: 'modal-right',

      }
    );
    // createOrEditCategoryDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });
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
  pageChanged(event: any): void {
    // this.loadData(this.itemsPerPage, event.page, this.search, this.itemOrder.value);
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
}
