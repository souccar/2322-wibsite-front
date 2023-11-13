import { HttpClient, HttpParams } from '@angular/common/http';
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



constructor( private _newsService: NewsService,
  private http:HttpClient){}
  ngOnInit(): void {
    this.getAllNews(this.itemsPerPage,1)
  }



getAllNews(itemsPerPage:number,currentPage:number)
{
 
  this._newsService.getAll(itemsPerPage,currentPage).subscribe((response:any)=>{
    this.news=response.result.data;
    this.totalItem=response.result.total
  })
}

pageChanged(event: any): void {
 
    this.getAllNews(this.itemsPerPage,event.page);

}




}


