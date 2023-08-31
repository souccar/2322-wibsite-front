import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISidebar, SidebarService } from './containers/layout/sidebar/sidebar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit, OnDestroy {
  sidebar: ISidebar={
    containerClassnames:'',
    menuClickCount:0,
    selectedMenuHasSubItems:false,
  };
  subscription: Subscription=new Subscription();
  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit(): void {
    this.subscription = this.sidebarService.getSidebar().subscribe(
      res => {
        this.sidebar = res;
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
