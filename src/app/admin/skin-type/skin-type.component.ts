import { Component, Injector } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateSkinTypeDialogComponent } from './create-skinType/create-skin-type-dialog.component';
import { PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';

@Component({
  selector: 'app-skin-type',
  templateUrl: './skin-type.component.html',

})
export class SkinTypeComponent {

  title = "Skin Type"
  displayMode = 'list';
  itemOrder = { label: "name", value: "name" };
  itemOptionsOrders = [{ label:"name", value: "name" },];
  itemsPerPage = 10;
  selectAllState = '';
  // selected: ReadSkinTypeDto[] = [];
   selected:any= '';

  // data: ReadSkinTypeDto[] = [];
  data:any;

  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;
  loading = false;
  ColumnMode = ColumnMode;
  // @ViewChild('basicMenu') public basicMenu: ContextMenuComponent | undefined;

  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _skinTypeService:SkinTypeService)
  {
    this.getAllSkinType()

  }

  getAllSkinType()
  {
   
    this._skinTypeService.getAll().subscribe((responce:any)=>{
      console.log(responce);
    })
  }
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
  // item: ReadSkinTypeDto
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
  //   ViewSkinTypeDialogComponent,
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
    // let EditSkinTypeDialog = this._modalService.show(
    //   EditSkinTypeDialogComponent,
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
    // EditSkinTypeDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });

}
  // entity: ReadSkinTypeDto
  protected delete(entity:any): void {
    // abp.message.confirm(
    //   this.l('SkinTypeDeleteWarningMessage', this.selected.length, 'Categories'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._SkinTypeService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }
  showAddNewModal(): void {
    let createOrEditSkinTypeDialog: BsModalRef;
    createOrEditSkinTypeDialog = this._modalService.show(
      CreateSkinTypeDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-right',

      }
    );
    // createOrEditSkinTypeDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });
  }
  // item: ReadSkinTypeDto
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
      //   'SkinTypeDeleteWarningMessage', this.selected.length, 'Categories',
      //   undefined,
        // (result: boolean) => {
        //   if (result) {
        //     this.selected.forEach(element => {
        //       this._SkinTypeService.delete(element.id).subscribe(() => {
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

class PagedCategoriesRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}