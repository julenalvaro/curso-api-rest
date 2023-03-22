const faker = require("faker");
const boom = require("@hapi/boom");

class ProductsService {
  constructor() {
    this.products = [];
    this.generateRandomProducts();
  }

  generateRandomProducts() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        nombre: faker.commerce.productName(),
        precio: faker.commerce.price(),
        imagen: faker.image.imageUrl(),
        isBlocked: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newProduct = {
          id: faker.datatype.uuid(),
          ...data,
        };
        this.products.push(newProduct);
        resolve(newProduct);
      }, 300);
    });
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 300);
    });
  }

  findOne(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
      const product = this.products.find((item) => item.id === id)
      if (!product) {
        reject(boom.notFound("Product not found"));
      }
      //error de lógica de negocio: si el producto está bloqueado, no se puede mostrar
      else if (product.isBlocked) {
        reject(boom.conflict("Product is blocked"));
      }
      resolve(product);
      }, 300);
    });
  }

  update(id, changes) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
          reject(boom.notFound("Product not found"));
        }
        const product = this.products[index];
        this.products[index] = {
          ...product,
          ...changes,
        };
        resolve(this.products[index]);
      }, 300);
    });
  }

  async delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.products.findIndex((item) => item.id === id);
        if (index === -1) {
          reject(boom.notFound("Product not found"));
        }
        this.products.splice(index, 1);
        resolve({ id });
      }, 300);
    });
  }
}

//exportamos

module.exports = ProductsService;
