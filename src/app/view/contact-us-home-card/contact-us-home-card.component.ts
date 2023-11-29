import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CreateUpdateContactDto } from 'src/shared/service-proxies/service-proxies';
import { ContactUsService } from 'src/shared/services/contact-us/contact-us.service';
import AOS from "aos";
@Component({
  selector: 'app-contact-us-home-card',
  templateUrl: './contact-us-home-card.component.html',
})
export class ContactUsHomeCardComponent implements OnInit{
  contactUs = new CreateUpdateContactDto();
 constructor(private _contactUsService: ContactUsService,
  private toastr: ToastrService){

 }
  ngOnInit(): void {
    AOS.init();
  }
  save() {

    this._contactUsService.insert(this.contactUs).subscribe((responce: any) => {

      if (responce.success) {

        this.toastr.success('Message Sent');
      }
    });
    this.contactUs = new CreateUpdateContactDto()
  }


}
