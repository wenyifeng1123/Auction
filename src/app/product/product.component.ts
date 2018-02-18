import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "the 1st pro", 1.99, 3.5, "d1", ["electronic","toothbrush"]),
      new Product(2, "the 2nd pro", 2.99, 2.5, "d2", ["toothbrush"]),
      new Product(3, "the 3rd pro", 3.99, 4.5, "d3", ["book"]),
      new Product(4, "the 4th pro", 4.99, 1.5, "d4", ["food"]),
      new Product(5, "the 5th pro", 5.99, 2.5, "d5", ["electronic"]),
      new Product(6, "the 6th pro", 6.99, 3.5, "d6", ["food","book"])
    ]
  }

}

export class Product {
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ) {}
}
