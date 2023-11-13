// import { ContextMenuComponent } from 'ngx-contextmenu';
import { Component, Injector, ViewChild } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ReadCategoryDto, ReadProductDto } from 'src/shared/service-proxies/service-proxies';
import { CreateProductDialogComponent } from './create-product/create-product-dialog.component';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ProductService } from 'src/shared/services/product-service/product.service';
import { finalize } from 'rxjs';
import { ContextMenuComponent } from '@perfectmemory/ngx-contextmenu';
import { EditProductDialogComponent } from './edit-product/edit-product-dialog.component';
import { ViewProductDialogComponent } from './view-product/view-product-dialog.component';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends PagedListingComponentBase<ReadProductDto> {


  title = "Products"
  displayMode = 'list';
  itemOrder = { label:("Name"), value: "name" };
  itemOptionsOrders = [
    { label: ("Name"), value: "name" },
    { label: ("Description"), value: "description" },
    { label: ("Point"), value: "point" },
    { label: ("Category"), value: "category" },
  ];

  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadProductDto[] = [];
  data: ReadProductDto[] = [];
  category=new ReadCategoryDto();
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
  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: CreateProductDialogComponent;

  constructor(
    injector: Injector,
    private _productService:ProductService,
    private _modalService: BsModalService,private toastr: ToastrService
    ) {
    super(injector);

  }

  override ngOnInit(): void {

    this.getAllProduct(this.itemsPerPage,1)
  }
  getAllProduct(itemsPerPage:number,currentPage:number)
  {
   
    this._productService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
   
      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }
  
  pageChanged(event: any): void {
   
      this.getAllProduct(this.itemsPerPage,event.page);
  
  }


  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  
  changeDisplayMode(mode:any): void {
    this.displayMode = mode;
  }

  showAddNewModal(): void {
    let createOrEditProductDialog: BsModalRef;
    createOrEditProductDialog = this._modalService.show(
      CreateProductDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg',

      }
    );
    createOrEditProductDialog.content.onSave.subscribe(() => {
      this.getAllProduct(this.itemsPerPage,1)
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
  editModal(id:number)
  {
    let editProductDialog: BsModalRef;
    editProductDialog = this._modalService.show(
        EditProductDialogComponent,
        {
          backdrop: true,
          ignoreBackdropClick: true,
          
          initialState: {
            id: id,
          },
        }
      );
      editProductDialog.content.onSave.subscribe(() => {
        this.getAllProduct(this.itemsPerPage,1)
      });
  }

deletebutton(id:number)
{
  this._productService.delete(id).subscribe((responce:any)=>{
    this.getAllProduct(this.itemsPerPage,1);
    this.toastr.success(responce.message);
  });

}
viewModal(id:number)
{
  this._modalService.show(
    ViewProductDialogComponent,
    {
      backdrop: true,
      ignoreBackdropClick: true,
      initialState: {
        id: id,
      },
    }
  );

}
  protected delete(entity: ReadProductDto): void {
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
    let request: PagedProductsRequestDto = new PagedProductsRequestDto();
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


  onContextMenuClick(action: string, item: any): void {
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

  
  itemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage=itemsPerPage
    this.getAllProduct(this.itemsPerPage,1)
  }

  isSelected(p: ReadProductDto): boolean {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }

  onSelect(item: ReadProductDto): void {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }

    this.selectedCount = this.selected.length;
  }

 

  selectAllChange($event:any): void {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }

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
  protected override list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    
  }
}

class PagedProductsRequestDto extends PagedRequestDto {
  keyword: string;
  sort_Field: string;
  sort_Desc: boolean;
}


