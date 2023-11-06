import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ReadNewsDto } from 'src/shared/service-proxies/service-proxies';
import { NewsService } from 'src/shared/services/news-service/news.service';

@Component({
  selector: 'app-news-home-card',
  templateUrl: './news-home-card.component.html',
  styleUrls: ['./news-home-card.component.scss']
})
export class NewsHomeCardComponent implements OnInit {
  baseUrl = environment.baseUrl;
  news: ReadNewsDto[] = [];
  constructor(private _newsService: NewsService,
    private _route: Router) {

  }
  ngOnInit(): void {
    this.getLastNews();
  }
  getLastNews() {
    this._newsService.getlastNews().subscribe((responce: any) => {
      this.news = responce.result;
    });
  }


  isLoading: boolean = false

  GoToNewsPage() {
    this._route.navigate(['news'])
    this.isLoading = true
  }



}
