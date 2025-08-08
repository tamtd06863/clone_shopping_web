import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ProductServiceService} from '../../service/product.service.service';
import {ProductModel} from '../../model/product.model';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  itemInCart: ProductModel[] = [];
  totalOrderValue: number = 0;

  constructor(private router: Router,
              private productService: ProductServiceService
  ) {
    this.itemInCart = this.productService.cartList
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalOrderValue = this.productService.calculateTotal(); // Gọi hàm tính tổng từ service
  }

  increaseQuantity(item: ProductModel): void {
    item.quantity += 1;
    this.calculateTotal();
  }

  decreaseQuantity(item: ProductModel): void {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.calculateTotal();
    }
  }

  formatPrice(price: number): string {
    return price.toLocaleString('vi-VN') + ' VNĐ'; // Định dạng giá và thêm "VNĐ"
  }
}
