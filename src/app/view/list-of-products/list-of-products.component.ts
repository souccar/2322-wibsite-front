import { Component } from '@angular/core';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss']
})
export class ListOfProductsComponent {
  carouselItems:any[]=[
  {
    id: 'carousel-0',
    title: 'Homemade Cheesecake with Fresh Berries and Mint',
    img: '/assets/img/cards/thumb-1.jpg',
    detail: '10.12.2019',
    category: 'Cupcakes',
    badges: ['NEW']
  },
  {
    id: 'carousel-1',
    title: 'Wedding Cake with Flowers Macarons and Blueberries',
    img: '/assets/img/cards/thumb-2.jpg',
    detail: '10.06.2020',
    category: 'Cakes',
    badges: ['TRENDING']
  },
  {
    id: 'carousel-2',
    title: 'Cheesecake with Chocolate Cookies and Cream Biscuits',
    img: '/assets/img/cards/thumb-3.jpg',
    detail: '03.01.2020',
    category: 'Cupcakes',
    badges: ['PROCESSED']
  },
  {
    id: 'carousel-3',
    title: 'Homemade Cheesecake with Dried Lemon on Top',
    img: '/assets/img/cards/thumb-1.jpg',
    detail: '22.02.2020',
    category: 'Cakes',
    badges: ['']
  },
  {
    id: 'carousel-4',
    title: 'Cupcake with Cream Biscuit Bananas and Sour Cherry',
    img: '/assets/img/cards/thumb-2.jpg',
    detail: '12.05.2020',
    category: 'Cakes',
    badges: ['DONE']
  }]
  groups = [
    {
      title: 'Hair Care',
      content: 'MMT Care'
    },
    {
      title: 'Skin Care',
      content: 'MMT Skin Care'
    },
    {
      title: 'Sunscreen',
      content: 'MMT Sunscreen'
    },
    {
      title: 'Sunscreen MMT',
      content: 'Sunscreen MMT'
    }
  ];
}
