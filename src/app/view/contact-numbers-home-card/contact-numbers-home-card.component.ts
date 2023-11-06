import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-numbers-home-card',
  templateUrl: './contact-numbers-home-card.component.html',
  styleUrls: ['./contact-numbers-home-card.component.scss']
})
export class ContactNumbersHomeCardComponent {
  contactData = [{
    DepartmentName: 'Sales Department',
    telephone: '+ (963) 11 543 4200 / Ext. 1624',
    fax: '+ (963) 11 543  4217',
    email: 'sales@ahc-me.net',
    icon: 'simple-icon-basket-loaded'

  },
  {
    DepartmentName: 'Marketing Department',
    telephone: '+ (963) 11 543 4200 Ext. 1626',
    fax: '+ (963) 11 543 4217',
    email: 'marketing@ahc-me.net',
    icon: 'simple-icon-credit-card'


  }, {
    DepartmentName: 'Business Development Department',
    telephone: '+ (963) 11 543 4200  Ext. 1625',
    fax: '+ (963) 11 5434217',
    email: 'bd@ahc-me.net',
    icon: 'simple-icon-briefcase'


  }, {
    DepartmentName: 'General inquiries',
    telephone: '+ (963) 11 543 4200Ext. 1622',
    fax: '+ (963) 11 543 4217',
    email: 'info@ahc-me.net',
    icon: 'simple-icon-globe-alt'


  }]
}
