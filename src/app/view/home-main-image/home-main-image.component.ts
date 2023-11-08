import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ReadSliderDto } from 'src/shared/service-proxies/service-proxies';
import { SliderService } from 'src/shared/services/slider/slider.service';

@Component({
  selector: 'app-home-main-image',
  templateUrl: './home-main-image.component.html',

})
export class HomeMainImageComponent implements OnInit  {
  sliderImages: ReadSliderDto[] = [];
  baseUrl = environment.baseUrl;
  constructor(private _sliderService: SliderService){}
  ngOnInit(): void {
    this.getAllSlider();
  }
  getAllSlider() {
    this._sliderService.getWithoutPagination().subscribe((response: any) => {
      console.log(response.result);
      this.sliderImages = response.result;
    })
  }
}
