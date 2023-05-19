import { Component, Input, Output } from '@angular/core';
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

  setValue(e: any) {
    this.valueInput = e.taget.value;
  }
  toggle() {

    this.status = !this.status;
  }

  // removeItem(_id: any) {
  //   this.products = this.products.filter(item => item._id != _id)
  // }
}
