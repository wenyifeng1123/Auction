import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable()
export class ProductService {

  constructor(private logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log("the method is invoked");
    return new Product(0, "iPhone7", 5899, "lastest telephone");
  }

}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {}
}
