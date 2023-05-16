import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interface/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  status: boolean = false
  valueInput = ""
  title = 'Quản lí dự án';
  products: IProduct[] = [
    { _id: 1, name: 'Pham Xuan Tien', price: 10, image: "https://images.hdqwalls.com/wallpapers/thumb/justice-league-zack-synder-4k-jc.jpg" },
    { _id: 2, name: 'Pham Xuan Tien 2', price: 20, image: "https://images.hdqwalls.com/wallpapers/thumb/shazam-fury-of-the-gods-fan-made-5k-oe.jpg" }
  ]
  setValue(e: any) {
    this.valueInput = e.taget.value;
  }
  toggle() {

    this.status = !this.status;
  }
  removeItem(_id: any) {
    this.products = this.products.filter(item => item._id != _id)
  }
}
