import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import { ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  ngOnInit(): void {

    this.isMobileXsmall = window.innerWidth < 768;
    this.isMobileMiddle=window.innerWidth == 768
    this.isMobilexMiddle=window.innerWidth>770 && window.innerWidth<1080 ;
  }
  isMobileXsmall: boolean = false;
  isMobileMiddle:boolean=false;
  isMobilexMiddle:boolean=false;


  @HostListener('window:resize', [])
onResize() {
  this.checkScreenSize();
}
checkScreenSize() {
  this.isMobileXsmall = window.innerWidth < 768;
  this.isMobileMiddle=window.innerWidth == 768;
  this.isMobilexMiddle=window.innerWidth>770 && window.innerWidth<1080 ;
}



}




