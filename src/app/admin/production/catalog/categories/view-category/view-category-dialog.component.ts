import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ReadCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-view-category-dialog',
  templateUrl: './view-category-dialog.component.html',

})
export class ViewCategoryDialogComponent implements OnInit {
  baseUrl=environment.baseUrl;
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

    this._categoryService.getById(this.id).subscribe((result) => {

      this.data = result.result;
      console.log(this.data);


    });
  }




}
