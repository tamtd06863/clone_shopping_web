import { Component } from '@angular/core';
import {ProductModel} from '../../model/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductServiceService} from '../../service/product.service.service';
import {HeaderComponent} from '../../component/header/header.component';

@Component({
  selector: 'app-detail',
  imports: [
    HeaderComponent
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  productDetail!: ProductModel;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductServiceService) {
    let {id} = this.activatedRoute.snapshot.params;
    console.log(id);
   this.productDetail = this.productService.getDetailProduct(+id);
   console.log(this.productDetail.id)
  }

  addProductToCard(id : number) {
    this.productService.addProductToCart(id)
  }

}
