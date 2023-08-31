import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ISidebar, SidebarService } from './admin/containers/layout/sidebar/sidebar.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LangService } from 'src/shared/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit, AfterViewInit {
  isMultiColorActive = environment.isMultiColorActive;
  constructor(private langService: LangService, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    this.langService.init();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.renderer.addClass(document.body, 'show');
    }, 1000);
    setTimeout(() => {
      this.renderer.addClass(document.body, 'default-transition');
    }, 1500);
  }
}
