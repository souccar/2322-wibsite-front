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
constructor( private _newsService: NewsService){}
  ngOnInit(): void {

    this.getAllNews()
  }



getAllNews()
{
  this._newsService.getAll().subscribe((response:any)=>{
      console.log(response)
    this.news=response.result;
  })
}
}
