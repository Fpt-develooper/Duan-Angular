import { Component } from '@angular/core';
import { IProduct } from './Interface/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: IProduct[] = [
    { _id: 1, name: 'Pham Xuan Tien', price: 10, image: "https://images.hdqwalls.com/wallpapers/thumb/justice-league-zack-synder-4k-jc.jpg" },
    { _id: 2, name: 'Pham Xuan Tien 2', price: 20, image: "https://images.hdqwalls.com/wallpapers/thumb/shazam-fury-of-the-gods-fan-made-5k-oe.jpg" }
  ]
  onHandleRemove(_id: any) {
    this.products = this.products.filter(item => item._id != _id)
  }
}

