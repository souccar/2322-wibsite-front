import { HttpParams } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { ReadSliderDto } from 'src/shared/service-proxies/service-proxies';
import { SliderService } from 'src/shared/services/slider/slider.service';
import { PagedRequestDto } from 'src/shared/paged-listing-component-base';
import { CreateSliderDialogComponent } from './create-slider/create-slider-dialog.component';
import { EditSliderDialogComponent } from './edit-slider/edit-slider-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  
})
export class SliderComponent implements OnInit {

  title = "Slider"
  displayMode = 'list';
  itemOrder = { label: "title", value: "title" };
  itemOptionsOrders = [{ label:"title", value: "title" },];
  itemsPerPage = 10;
  selectAllState = '';
  selected: ReadSliderDto[] = [];
  data: ReadSliderDto[] = [];
 

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
  // @ViewChild('addNewModalRef', { static: true }) addNewModalRef: CreateSliderDialogComponent;
  constructor( injector: Injector,
    private _modalService: BsModalService,
    private _sliderService:SliderService,
    private toastr: ToastrService)
  {
  }


  ngOnInit(): void {

    this.getAllSlider(this.itemsPerPage,1)
  }
  getAllSlider(itemsPerPage:number,currentPage:number)
  {
   
    this._sliderService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
     
      this.data=response.result.data;
      this.totalItem=response.result.total
    })
  }
  deletebutton(id:number){
    this._sliderService.delete(id).subscribe((response:any)=>{
      this.getAllSlider(this.itemsPerPage,1)
      this.toastr.success(response.message);
    });
  
  }
  pageChanged(event: any): void {

   
    this.getAllSlider(this.itemsPerPage,event.page);

}


  edit (id:number)
  {

  }



  itemsPerPageChange(itemsPerPage: any): void {

    this.itemsPerPage=itemsPerPage
    this.getAllSlider(this.itemsPerPage,1)
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
    request: PagedSliderRequestDto,
   
    finishedCallback: Function
  ): void {
  }


  changeOrderBy(item: any): void {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  onContextMenuClick(action: string, item: ReadSliderDto): void {
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
  //   ViewSliderDialogComponent,
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
  let editSliderDialog: BsModalRef;
      editSliderDialog = this._modalService.show(
      EditSliderDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        initialState: {
          id: id,
        },
      }
    );
    editSliderDialog.content.onSave.subscribe(() => {
      this.getAllSlider(this.itemsPerPage,1)
    });

}
  // entity: ReadSliderDto
  protected delete(entity:any): void {
    // abp.message.confirm(
    //   this.l('SliderDeleteWarningMessage', this.selected.length, 'Categories'),
    //   undefined,
    //   (result: boolean) => {
    //     if (result) {
    //       this._SliderService.delete(entity.id).subscribe(() => {
    //         abp.notify.success(this.l('SuccessfullyDeleted'));
    //         this.refresh();
    //       });
    //     }
    //   }
    // );
  }
  showAddNewModal(): void {
    let createOrEditSliderDialog: BsModalRef;
    createOrEditSliderDialog = this._modalService.show(
      CreateSliderDialogComponent,
      {
        backdrop: true,
        ignoreBackdropClick: true,
        class: 'modal-lg',

      }
    );
    createOrEditSliderDialog.content.onSave.subscribe(() => {
      this.getAllSlider(this.itemsPerPage,1)
    });
  }
  // item: ReadSliderDto
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
      //   'SliderDeleteWarningMessage', this.selected.length, 'Categories',
      //   undefined,
        // (result: boolean) => {
        //   if (result) {
        //     this.selected.forEach(element => {
        //       this._SliderService.delete(element.id).subscribe(() => {
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
    let request: PagedSliderRequestDto = new PagedSliderRequestDto();
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

class PagedSliderRequestDto extends PagedRequestDto {
  keyword: string='';
  sort_Field: string='';
  sort_Desc: boolean=false;
  isActive: boolean=false;
}