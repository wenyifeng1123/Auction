import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
  new Product(1, "the 1st pro", 1.99, 3.5, "d1", ["electronic","toothbrush"]),
  new Product(2, "the 2nd pro", 2.99, 2.5, "d2", ["toothbrush"]),
  new Product(3, "the 3rd pro", 3.99, 4.5, "d3", ["book"]),
  new Product(4, "the 4th pro", 4.99, 1.5, "d4", ["food"]),
  new Product(5, "the 5th pro", 5.99, 2.5, "d5", ["electronic"]),
  new Product(6, "the 6th pro", 6.99, 3.5, "d6", ["food","book"])
];

  private comments: Comment[] = [
    new Comment(1, 1, "2018,2,27 22:26", "Mike", 3, "not bad"),
    new Comment(2, 1, "2018,3,27 212:26", "Jane", 4, "great"),
    new Comment(3, 1, "2018,4,27 20:26", "Johna", 2, "not bad")

  ]

  constructor() { }



  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}


export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
