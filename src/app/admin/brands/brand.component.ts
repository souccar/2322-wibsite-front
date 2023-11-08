import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ReadBrandDto } from 'src/shared/service-proxies/service-proxies';
import { BrandService } from 'src/shared/services/brand-service/brand.service';
import { CreateBrandDialogComponent } from './create-brand/create-brand-dialog.component';
import { HttpParams } from '@angular/common/http';
import { EditBrandDialogComponent } from './edit-brand/edit-brand-dialog.component';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',

})

export class BrandComponent extends PagedListingComponentBase<ReadBrandDto>  implements OnInit {
  title = "Brand"
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
    private _brandService:BrandService)
  {

    super(injector);
  }



  override ngOnInit(): void {

    this.getAllBrand(this.itemsPerPage,1)
  }
  getAllBrand(itemsPerPage:number,currentPage:number)
  {
   
    this._brandService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
        console.log(response)
      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }
  
  pageChanged(event: any): void {
   
      this.getAllBrand(this.itemsPerPage,event.page);
  
  }
  deletebutton(id:number){
    this._brandService.delete(id).subscribe((responce:any)=>{
      this.getAllBrand(this.itemsPerPage,1)
    });

  }

  editModal(id:number): void {
    let editBrandDialog: BsModalRef;
        editBrandDialog = this._modalService.show(
        EditBrandDialogComponent,
        {
          backdrop: true,
          ignoreBackdropClick: true,
          initialState: {
            id: id,
          },
        }
      );
      editBrandDialog.content.onSave.subscribe(() => {
      this.getAllBrand(this.itemsPerPage,1)
      });

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


  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  onContextMenuClick(action: string, item: ReadBrandDto): void {
    switch (action) {
      case "delete":
        this.delete(item);
        break;
      case "edit":
        this.editModal(item.id);
        break;
      case "view":

       break;

      default:
        break;
    }
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
      this.getAllBrand(this.itemsPerPage,1)
    });
  }
   itemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage=itemsPerPage
    this.getAllBrand(this.itemsPerPage,1)
  }

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

  loadData(pageSize: number = 10, currentPage: number = 1, search: string = '', sort_Desc: boolean = false): void {
    let request: PagedBrandRequestDto = new PagedBrandRequestDto();
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    request.keyword = search;
    request.sort_Desc = sort_Desc;
    request.skipCount = (currentPage - 1) * pageSize;
    request.maxResultCount = this.itemsPerPage;
  }
  protected override delete(entity: ReadBrandDto): void {
    throw new Error('Method not implemented.');
  }


  protected override list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    // throw new Error('Method not implemented.');
  }
}

class PagedBrandRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}
