import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductModel} from '../../model/product.model';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductServiceService} from '../../service/product.service.service';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  constructor(
    private router: Router,
    private productService: ProductServiceService,
  ){
  }
  @Input() product!:ProductModel
  navigateToDetail(id: number) {

    this.router.navigate([`detail/${id}`]).then();
    console.log(id)
  }

  addProductToCard(id : number) {
    this.productService.addProductToCart(id)
  }
}



