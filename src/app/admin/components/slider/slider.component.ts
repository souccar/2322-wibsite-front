import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {

  @Input("first") first:string;
  @Input("second") second:string;
  @Input("third") third:string;
  @Input("fourth") fourth:string;
  @Input("fifth") fifth:string;
  @Input("borderRadius")borderRadius:number;
}
