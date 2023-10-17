import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-detail-tabs',
  templateUrl: './product-detail-tabs.component.html'
})
export class ProductDetailTabsComponent implements OnInit {
  comments:any[] = [
    {
        title: 'Very informative content, thank you. ',
        detail: 'Mayra Sibley | Tea Loaf with Fresh Oranges | 17.09.2018 - 04:45',
        thumb: '/assets/img/profiles/l-1.jpg',
        rate: 5,
        key: 0
    },
    {
        title: 'This article was delightful to read. Please keep them coming.',
        detail: 'Barbera Castiglia | Cheesecake with Chocolate Cookies | 15.08.2018 - 01:18',
        thumb: '/assets/img/profiles/l-2.jpg',
        rate: 4,
        key: 1
    },
    {
        title: 'Your post is bad and you should feel bad.',
        detail: 'Bao Hathaway | Homemade Cheesecake | 26.07.2018 - 11:14',
        thumb: '/assets/img/profiles/l-3.jpg',
        rate: 5,
        key: 2
    },
    {
        title: 'Very original idea!',
        detail: 'Lenna Majeed | Tea Loaf with Fresh Oranges | 17.06.2018 - 09:20',
        thumb: '/assets/img/profiles/l-4.jpg',
        rate: 3,
        key: 3
    },
    {
        title: 'This article was delightful to read. Please keep them coming.',
        detail: 'Esperanza Lodge | Cheesecake with Fresh Berries | 16.06.2018 - 16:45',
        thumb: '/assets/img/profiles/l-5.jpg',
        rate: 2,
        key: 4
    },
    {
        title: 'Nah, did not like it.',
        detail: '24.07.2018 - 15:00',
        thumb: '/assets/img/profiles/l-2.jpg',
        rate: 5,
        key: 5
    },
    {
        title: 'Laree Munsch',
        detail: 'Brynn Bragg | Wedding Cake with Flowers | 12.04.2018 - 12:45',
        thumb: '/assets/img/profiles/l-1.jpg',
        rate: 4,
        key: 6
    }
];
questions:any[] = [
  {
    question: '1. Richardson beer labore wes anderson cred nesciunt?',
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod highlife accusamus terry richardson ad squid. 3 wolf moonofficia aute, non cupidatat skateboard dolor brunch.
     Brunch 3wolf moon tempor, sunt aliqua put a bird on it squidsingle- origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson cred nesciunt sapiente ea proident.
     Ad veganexcepteur butcher vice lomo.Leggings occaecat craftbeer farm - to - table, raw denim aesthetic synth nesciuntyou probably haven\'t heard of them accusamus laboresustainable VHS.`,
    id: 'q1'
  },
  {
    question: '2. Labore wes anderson cred nesciunt sapiente ea proident?',
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod highlife accusamus terry richardson ad squid. 3 wolf moonofficia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod.
     Brunch 3wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson cred nesciunt sapiente ea proident.`,
    id: 'q2'
  },
  {
    question: '3. Sunt aliqua put a bird on it squid?',
    answer: `Brunch 3wolf moon tempor, sunt aliqua put a bird on it squidsingle-origin coffee nulla assumenda shoreditch et.Nihil anim keffiyeh helvetica, craft beer labore wesanderson cred nesciunt sapiente ea proident.
     Ad veganexcepteur butcher vice lomo. Leggings occaecat craftbeer farm-to-table, raw denim aesthetic synth nesciuntyou probably haven\'t heard of them accusamus laboresustainable VHS.`,
    id: 'q3'
  },
  {
    question: '4. Skateboard dolor brunch?',
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
     Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.`,
    id: 'q4'
  },
  {
    question: '5. Vestibulum ante ipsum primis in faucibus?',
    answer: `Sed volutpat mollis dui eget fringilla. Vestibulum blandit urna ut tellus lobortis tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque quis cursus mauris.`,
    id: 'q5'
  },
  {
    question: '6. Moon officia aute?',
    answer: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
     Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.`,
    id: 'q6'
  }
];

  constructor() { }

  ngOnInit(): void {
  }



}
