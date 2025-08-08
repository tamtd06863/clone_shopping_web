import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './component/card/card.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {ProductModel} from './model/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
