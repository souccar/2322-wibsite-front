import { Component, Injector, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ReadUserDto } from 'src/shared/service-proxies/service-proxies';
import { UserService } from 'src/shared/services/user/user.service';
import { EditUserDialogComponent } from './edit-user/edit-user-dialog.component';
import { CreateUserDialogComponent } from './create-user/create-user-dialog.component';
import { PagedListingComponentBase, PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',

})
export class UserComponent extends PagedListingComponentBase<ReadUserDto> {
  
  title = "User"
  displayMode = 'list';
  itemOrder = { label: "name", value: "name" };
  itemOptionsOrders = [{ label:"name", value: "name" },];
  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadUserDto[] = [];
  data: ReadUserDto[] = [];
 

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
  // @ViewChild('addNewModalRef', { static: true }) addNewModalRef: CreateUserDialogComponent;
  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _userService:UserService,
    private toastr: ToastrService)
  {
   
super(injector);
  }


  override ngOnInit(): void {

    this.getAllUser(this.itemsPerPage,1)
  }
  getAllUser(itemsPerPage:number,currentPage:number)
  {
   
    this._userService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{

      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }
  
  pageChanged(event: any): void {
   
      this.getAllUser(this.itemsPerPage,event.page);
  
  }
  deletebutton(id:number){
    this._userService.delete(id).subscribe((responce:any)=>{
      this.getAllUser(this.itemsPerPage,1)

      this.toastr.success(responce.message);
    });
  
  }

  edit (id:number)
  {

  }



  itemsPerPageChange(itemsPerPage: any): void {
    this.itemsPerPage=itemsPerPage
    this.getAllUser(itemsPerPage,1);
  }

  searchKeyUp(event:any): void {
    const val = event.target.value.toLowerCase().trim();
    this.loadData(this.itemsPerPage, 1, val);
  }
  protected override list(request: PagedRequestDto, pageNumber: number, finishedCallback: Function): void {
    
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

  onContextMenuClick(action: string, item: ReadUserDto): void {
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
  //   ViewUserDialogComponent,
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
  let editUserDialog: BsModalRef;
      editUserDialog = this._modalService.show(
      EditUserDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        initialState: {
          id: id,
        },
      }
    );
    editUserDialog.content.onSave.subscribe(() => {
 
      this.getAllUser(this.itemsPerPage,1)
    });

}
  // entity: ReadUserDto
  protected delete(entity:any): void {
    // abp.message.confirm(
    //   this.l('UserDeleteWarningMessage', this.selected.length, 'Categories'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._UserService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }
  showAddNewModal(): void {
    let createOrEditUserDialog: BsModalRef;
    createOrEditUserDialog = this._modalService.show(
      CreateUserDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg',

      }
    );
    createOrEditUserDialog.content.onSave.subscribe(() => {
 
      this.getAllUser(this.itemsPerPage,1)
    });
  }
  // item: ReadUserDto
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
      //   'UserDeleteWarningMessage', this.selected.length, 'Categories',
      //   undefined,
        // (result: boolean) => {
        //   if (result) {
        //     this.selected.forEach(element => {
        //       this._UserService.delete(element.id).subscribe(() => {
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
    let request: PagedUserRequestDto = new PagedUserRequestDto();
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

class PagedUserRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}