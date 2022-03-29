import { GENDER } from './Gender';

export class ProductItem {
  title: string;
  gtin: string;
  price: number;
  salePrice: number;
  imageLink: string;
  additionalImageLinks: string[];

  private _gender!: GENDER;
  set gender(value: string) {
    switch (value) {
      case GENDER.FEMALE:
        this._gender = GENDER.FEMALE;
        break;
      case GENDER.MALE:
        this._gender = GENDER.MALE;
        break;
      case GENDER.UNISEX:
        this._gender = GENDER.UNISEX;
        break;
      default:
        throw new Error('Invalid value.');
    }
  }
  get gender(): GENDER {
    return this._gender;
  }

  constructor(
    title: string,
    gtin: string,
    gender: string,
    price: number,
    salePrice: number,
    imageLink: string,
    additionalImageLinks: string) {
    this.title = title;
    this.gtin = gtin;
    this.gender = gender;
    this.price = price;
    this.salePrice = salePrice;
    this.imageLink = imageLink;
    this.additionalImageLinks = additionalImageLinks.split(',');
  }
}