import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { finalize } from 'rxjs';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ReadBrandDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CreateBrandDialogComponent } from './create-brand/create-brand-dialog.component';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',

})

export class BrandComponent extends PagedListingComponentBase<ReadBrandDto>  implements OnInit {


  protected override list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    // throw new Error('Method not implemented.');
  }

  title = "Skin Type"
  displayMode = 'list';
  itemOrder = { label: "name", value: "name" };
  itemOptionsOrders = [{ label:"name", value: "name" },];
  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadBrandDto[] = [];

  data: ReadBrandDto[] = [];
 

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

  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _brandService:BrandService)
  {
   
    super(injector);
  }
  override ngOnInit(): void {
    this.getAllBrand()
    // this.loadData(this.itemsPerPage, 1, this.search);
  }

  getAllBrand()
  {
    let params = new HttpParams().set('count', this.itemsPerPage) ;
   
    this._brandService.getAll(params).subscribe((responce:any)=>{
      console.log(responce.result.data);
      this.data=responce.result.data
      
    })
  }
  itemsPerPageChange(perPage: number): void {
    this.loadData(perPage, 1, this.search);
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
  //   request: PagedBrandRequestDto,
   
  //   finishedCallback: Function
  // ): void {
  //   request.keyword = this.search;

  //   this._brandService
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

  onContextMenuClick(action: string, item: ReadBrandDto): void {
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
  //   ViewBrandDialogComponent,
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
    // let EditBrandDialog = this._modalService.show(
    //   EditBrandDialogComponent,
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
    // EditBrandDialog.content.onSave.subscribe(() => {
    //   this.refresh();
    // });

}
  // entity: ReadBrandDto
  protected delete(entity:any): void {
    // abp.message.confirm(
    //   this.l('BrandDeleteWarningMessage', this.selected.length, 'Categories'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._BrandService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }
  showAddNewModal(): void {
    let createOrEditBrandDialog: BsModalRef;
    createOrEditBrandDialog = this._modalService.show(
      CreateBrandDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-right',

      }
    );
    createOrEditBrandDialog.content.onSave.subscribe(() => {
      window.location.reload();
    });
  }
  // item: ReadBrandDto
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
      //   'BrandDeleteWarningMessage', this.selected.length, 'Categories',
      //   undefined,
        // (result: boolean) => {
        //   if (result) {
        //     this.selected.forEach(element => {
        //       this._BrandService.delete(element.id).subscribe(() => {
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
    let request: PagedBrandRequestDto = new PagedBrandRequestDto();
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

class PagedBrandRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}