import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadCategoryDto } from 'src/shared/service-proxies/service-proxies';
import { CategoryService } from 'src/shared/services/category-service/category.service';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  baseUrl = environment.baseUrl;
  categoriesLoaded = false;
  categories: ReadCategoryDto[] = [];
  slideSettings = {
    type: 'carousel',
    gap: 30,
    perView: 3,
    hideNav: true,
    peek: { before: 10, after: 10 },
    breakpoints: {
      600: { perView: 1 },
      992: { perView: 2 },
      1200: { perView: 3 }
    }
  }
  constructor( private _categoryService: CategoryService){}
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this._categoryService.getWithoutPagination().subscribe((responce: any) => {
      this.categoriesLoaded = true
      this.categories = responce.result
      console.log(this.categories)
    })

  }

}
