import { Component } from '@angular/core';
import {ProductModel} from '../../model/product.model';
import {HeaderComponent} from '../../component/header/header.component';
import {CardComponent} from '../../component/card/card.component';
import {FooterComponent} from '../../component/footer/footer.component';
import {ProductServiceService} from '../../service/product.service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CardComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardListHome : ProductModel[] = [];

  constructor(
    private router: Router,
    private productService: ProductServiceService
  ){
    this.cardListHome = this.productService.productList;
  }
}
