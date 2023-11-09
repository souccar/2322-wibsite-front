import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/shared/services/news-service/news.service';
import { Subscription } from 'rxjs';
import { ReadNewsDto } from 'src/shared/service-proxies/service-proxies';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  id: any;
  news = new ReadNewsDto();
  baseUrl = environment.baseUrl;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private _newsService: NewsService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    });


    this.getNewsById(this.id)
  }


  getNewsById(id) {
    this._newsService.getById(id).subscribe((response: any) => {
      this.news = response.result;
    })

  }

}
