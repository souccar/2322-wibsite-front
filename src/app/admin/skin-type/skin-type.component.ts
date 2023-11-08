import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateSkinTypeDialogComponent } from './create-skinType/create-skin-type-dialog.component';
import { PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { SkinTypeService } from 'src/shared/services/skinType-service/skinType.service';
import { ReadSkinTypeDto } from 'src/shared/service-proxies/service-proxies';
import { finalize } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { EditSkinTypeDialogComponent } from './edit-skinType/edit-skin-type-dialog.component';

@Component({
  selector: 'app-skin-type',
  templateUrl: './skin-type.component.html',

})
export class SkinTypeComponent implements OnInit {

  title = "Skin Type"
  displayMode = 'list';
  itemOrder = { label: "name", value: "name" };
  itemOptionsOrders = [{ label:"name", value: "name" },];
  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadSkinTypeDto[] = [];
  data: ReadSkinTypeDto[] = [];
 

  currentPage = 1;
  search = '';
  totalItem = 0;
  totalPage = 0;
  selectedCount = 0;
  isActive: boolean | null = true;
  advancedFiltersVisible = false;
  loading = false;
  ColumnMode = ColumnMode;

  // @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  // @ViewChild('addNewModalRef', { static: true }) addNewModalRef: CreateSkinTypeDialogComponent;
  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _skinTypeService:SkinTypeService)
  {
   

  }


  ngOnInit(): void {

    this.getAllSkinType(this.itemsPerPage,1)
  }
  getAllSkinType(itemsPerPage:number,currentPage:number)
  {
   
    this._skinTypeService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
        console.log(response)
      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }
  
  pageChanged(event: any): void {
   
      this.getAllSkinType(this.itemsPerPage,event.page);
  
  }
  deletebutton(id:number){
    this._skinTypeService.delete(id).subscribe((responce:any)=>{
      this.getAllSkinType(this.itemsPerPage,1)
    });
  
  }

  edit (id:number)
  {
    console.log(id)
  }



  itemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage=itemsPerPage
    this.getAllSkinType(itemsPerPage,1);
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
  protected list(
    request: PagedSkinTypeRequestDto,
   
    finishedCallback: Function
  ): void {
   
  }


  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  onContextMenuClick(action: string, item: ReadSkinTypeDto): void {
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
 editModal(id:number): void {
  let editSkinTypeDialog: BsModalRef;
      editSkinTypeDialog = this._modalService.show(
      EditSkinTypeDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        initialState: {
          id: id,
        },
      }
    );
    editSkinTypeDialog.content.onSave.subscribe(() => {
 
      this.getAllSkinType(this.itemsPerPage,1)
    });

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
    createOrEditSkinTypeDialog.content.onSave.subscribe(() => {
 
      this.getAllSkinType(this.itemsPerPage,1)
    });
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

  loadData(pageSize: number = 10, currentPage: number = 1, search: string = '', sort_Desc: boolean = false): void {
    let request: PagedSkinTypeRequestDto = new PagedSkinTypeRequestDto();
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    request.keyword = search;
    request.sort_Desc = sort_Desc;
    request.skipCount = (currentPage - 1) * pageSize;
    request.maxResultCount = this.itemsPerPage;
    this.list(request, () => { });
  }
}

class PagedSkinTypeRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}