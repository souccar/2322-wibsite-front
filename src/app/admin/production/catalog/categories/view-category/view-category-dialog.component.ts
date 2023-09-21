import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReadCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';

@Component({
  selector: 'app-view-category-dialog',
  templateUrl: './view-category-dialog.component.html',

})
export class ViewCategoryDialogComponent implements OnInit {
  data = new ReadCategoryDto();
  id: number;
  editable: true;
  constructor(private _categoryService: CategoryService,
    public bsModalRef: BsModalRef,

   ) { }

  ngOnInit(): void {

    this.displayCategory();


  }
  displayCategory()
  {

    // this._categoryService.getAll(this.id).subscribe((result) => {

    //   this.data = result;


    // });
  }




}
