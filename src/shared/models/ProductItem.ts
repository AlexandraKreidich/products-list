import { GENDER } from './Gender';

export class ProductItem {
  title: string;
  gtin: string;
  price: number;
  salePrice: number;
  imageLink: string;
  additionalImageLinks: string[];
  gender!: GENDER | string;
  priceCurrency: string;

  constructor(
    title: string,
    gtin: string,
    gender: string,
    price: number,
    salePrice: number,
    priceCurrency: string,
    imageLink: string,
    additionalImageLinks: string[]) {
    this.title = title;
    this.gtin = gtin;
    this.gender = gender;
    this.price = price;
    this.salePrice = salePrice;
    this.priceCurrency = priceCurrency;
    this.imageLink = imageLink;
    this.additionalImageLinks = additionalImageLinks;
  }
}