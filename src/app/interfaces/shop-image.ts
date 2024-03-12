export class ShopImage {
  image: string;
  imageHover: string;
  name: string;
  url: string;

  constructor(image: string, imageHover: string, name: string, url: string) {
    this.image = image;
    this.imageHover = imageHover;
    this.name = name;
    this.url = url;
  }
}
