import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadNewsDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit{
news:ReadNewsDto[]=[];
baseUrl = environment.baseUrl;
currentPage = 1;
itemsPerPage =4;
totalItem = 0;
totalPage = 0;



constructor( private _newsService: NewsService){}
  ngOnInit(): void {

    this.getAllNews()
  }



getAllNews()
{
  let params = new HttpParams().set('count', this.itemsPerPage) ;
  this._newsService.getAll(params).subscribe((response:any)=>{
      console.log(response)
    this.news=response.result;
    // this.totalItem=response.result.total
  })
}
pageChanged(event: any): void {
  console.log(event)
  // this.getAllNews()
}
}
