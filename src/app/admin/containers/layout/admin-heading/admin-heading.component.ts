import { Component, Injector, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AppComponentBase } from 'src/shared/app-component-base';

@Component({
  selector: 'app-admin-heading',
  templateUrl: './admin-heading.component.html',
})
export class AdminHeadingComponent extends AppComponentBase {
  @Input() title = '';
  path = '';

  constructor(injector: Injector,private router: Router, private activatedRoute: ActivatedRoute) {
    super(injector);
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
    ).subscribe((event) => {
     this.path = this.router.url.split('?')[0];
    });
  }
}
