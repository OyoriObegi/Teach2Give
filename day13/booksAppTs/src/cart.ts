import { products } from "./products";
import { Book } from "./books_interface";

let cart: Book[] = [];

export function addToCart(id: number) {
  const product = products.find((p) => p.id === id);
  if (product) {
    cart.push(product);
    console.log(`Added ${product.title} to cart.`);
  }
}
