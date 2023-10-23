import { Component, OnInit } from '@angular/core';
import AOS from "aos";
import { ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {


  @ViewChild('section1') section1!: ElementRef;
  @ViewChild('section2') section2!: ElementRef;
  @ViewChild('section3') section3!: ElementRef;
  isAnimated=false;
  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    const sections = [this.section1, this.section2, this.section3];

    sections.forEach((section: ElementRef) => {
      const sectionTop = section.nativeElement.offsetTop;
      const sectionHeight = section.nativeElement.offsetHeight;
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= sectionTop - sectionHeight / 2 && scrollPosition <= sectionTop + sectionHeight) {
        this.renderer.addClass(section.nativeElement, 'rotate-in-down-left');
        console.log("1111111");
        this.isAnimated=true;
        this.renderer.addClass(section.nativeElement, 'rotate-in-down-left');
        console.log("222222");
        this.isAnimated=true;
      } else {
        console.log("333333");
        this.renderer.removeClass(section.nativeElement, 'rotate-in-down-left');

      }
    });
  }

}




