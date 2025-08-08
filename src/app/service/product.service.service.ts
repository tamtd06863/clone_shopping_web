import { Injectable } from '@angular/core';
import {ProductModel} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() {
  }

  getDetailProduct(id: number):ProductModel {
    let product = this.productList.find(item => item.id === id)
    if (product) {
      console.log("ser" + product);
      return product;
    }else{
      return {} as ProductModel;
    }
  }

  cartList: ProductModel[] = [] ;

  addProductToCart(id: number) {
    let product = this.productList.find(item => item.id === id);
    if(product)
    {
      let productInCart = this.cartList.find(item => item.id === id);
      if(productInCart){
        console.log(productInCart)

        product.quantity += 1;

      }
      else
      {

        product.quantity += 1;
        this.cartList.push(product);
      }
    }
    console.log(this.cartList);
  }

  calculateTotal(): number {
    return this.cartList.reduce((total, item) => total + ((item.price) * item.quantity), 0);
  }




  productList : ProductModel[] = [
    {
      id: 1,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/sneaker-315122-111-air-force-1-07-nike-kingshoesvn-tphcm-tanbinh-17-logo-1551924204-jpg/500_SNEAKER-315122-111-AIR-FORCE-1-07-NIKE-KINGSHOES.VN-TPHCM-TANBINH-17-logo-1551924204-.jpg.webp',
      name: 'AIR FORCE 1',
      rate: '5 stars',
      price: 3200000,
      quantity: 0,
    },

    {
      id: 2,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/fd4329-002-giay-nike-air-max-nuaxis-gia-tot-den-king-shoes-12jpeg/500_fd4329-002-giay-nike-air-max-nuaxis-gia-tot-den-king-shoes-12.jpeg.webp',
      name: 'NIKE AIR MAX NUAXIS 1',
      rate: '5 stars',
      price: 2200000,
      quantity: 0,
    },

    {
      id: 3,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/ib4663-121-giay-nike-journey-run-gia-tot-den-king-shoes-12jpeg/500_ib4663-121-giay-nike-journey-run-gia-tot-den-king-shoes-12.jpeg.webp',
      name: 'AIR FORCE 1 SLOW SHADOW',
      rate: '5 stars',
      price: 3600000,
      quantity: 0,
    },

    {
      id: 4,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/dr7883-102-giay-nike-air-force-1-low-shadow-gia-tot-den-king-shoes-9jpg/500_dr7883-102-giay-nike-air-force-1-low-shadow-gia-tot-den-king-shoes-9.jpg.webp',
      name: 'NIKE AIR PEGASUS 2005',
      rate: '5 stars',
      price: 2900000,
      quantity: 0,
    },

    {
      id: 5,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/fn7153-101-giay-nike-air-peg-2k5-phantom-and-coconut-milk-gia-tot-den-king-shoes-12jpeg/500_fn7153-101-giay-nike-air-peg-2k5-phantom-and-coconut-milk-gia-tot-den-king-shoes-12.jpeg.webp',
      name: 'JORDAN 1 MID \'CHICAGO WHITE TOE\'',
      rate: '5 stars',
      price: 3900000,
      quantity: 0,
    },

    {
      id: 6,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/jordan-1-mid-chicago-white-toe-554725-173-king-shoes-sneaker-real-hcm-1624274017jpeg/500_jordan-1-mid-chicago-white-toe-554725-173-king-shoes-sneaker-real-hcm-1624274017.jpeg.webp',
      name: 'NIKE FREE METCON 6',
      rate: '5 stars',
      price: 3900000,
      quantity: 0,
    },

    {
      id: 7,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/fj7126-106-giay-nike-free-metcon-6-white-elemental-pink-gia-tot-den-king-shoes-12jpg/500_fj7126-106-giay-nike-free-metcon-6-white-elemental-pink-gia-tot-den-king-shoes-12.jpg.webp',
      name: 'NIKE PEGASUS 41',
      rate: '5 stars',
      price: 3200000,
      quantity: 0,
    },

    {
      id: 8,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/fd2723-103-giay-nike-air-zoom-pegasus-41-gia-tot-den-king-shoes-12jpeg/500_fd2723-103-giay-nike-air-zoom-pegasus-41-gia-tot-den-king-shoes-12.jpeg.webp',
      name: 'NIKE BLAZER MID 77 VINTAGE',
      rate: '5 stars',
      price: 2900000,
      quantity: 0,
    },

    {
      id: 9,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/bq6806-100-giay-nike-blazer-mid-77-vintage-gia-tot-den-king-shoes-12jpeg/500_bq6806-100-giay-nike-blazer-mid-77-vintage-gia-tot-den-king-shoes-12.jpeg.webp',
      name: 'NIKE JORDAN 1 SLOW WHITE BLACK GYM RED',
      rate: '5 stars',
      price: 3600000,
      quantity: 0,
    },

    {
      id: 10,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/nike-jordan-1-low-white-black-gym-red-ib8971-gia-tot-den-king-shoesjpg/500_nike-jordan-1-low-white-black-gym-red-ib8971-gia-tot-den-king-shoes.jpg.webp',
      name: 'AIR FORCE 1 WB',
      rate: '5 stars',
      price: 3900000,
      quantity: 0,
    },

    {
      id: 11,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/giay-nike-air-force-1-low-flax-cj9179-200-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-12-1647674433jpeg/500_gia%CC%80y-nike-air-force-1-low-flax-cj9179-200-chi%CC%81nh-ha%CC%83ng-de%CC%82%CC%81n-king-shoes-12-1647674433.jpeg.webp',
      name: 'AIR FORCE 1 MID X OFF WHITE',
      rate: '5 stars',
      price: 4800000,
      quantity: 0,
    },

    {
      id: 12,
      imgURL: 'https://kingshoes.vn/data/upload/thumb/dr0500-101-giay-nike-air-force-1-mid-x-off-white-gia-tot-den-king-shoes-1jpg/500_dr0500-101-giay-nike-air-force-1-mid-x-off-white-gia-tot-den-king-shoes-1.jpg.webp',
      name: 'NIKE AIR MAX 2017',
      rate: '5 stars',
      price: 3200000,
      quantity: 0,
    },
  ]
}


