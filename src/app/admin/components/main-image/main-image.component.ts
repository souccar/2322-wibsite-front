import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-image',
  templateUrl: './main-image.component.html',
  styleUrls: ['./main-image.component.scss']
})

export class MainImageComponent {

  // @Input() src="";
  @Input() src="../../../../assets/img/homePage/CETAPHIL_Why-Cetaphil.jpg";


}
