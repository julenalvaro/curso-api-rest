const faker = require("faker");
const boom = require("@hapi/boom");

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generateRandomCategories();
  }

  generateRandomCategories() {
    const limit = 10;
    const categories = [
      "Electrónica",
      "Hogar y cocina",
      "Ropa y accesorios",
      "Salud y cuidado personal",
      "Juguetes y juegos",
    ];
    for (let index = 0; index < limit; index++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        nombre: categories[index],
        descripcion: faker.lorem.sentence(),
      });
    }
  }

  create(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const newCategory = {
          id: faker.datatype.uuid(),
          ...data,
        };
        this.categories.push(newCategory);
        resolve(newCategory);
      }, 300);
    });
  }
  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.categories);
      }, 300);
    });
  }
  findOne(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const category = this.categories.find((item) => item.id === id);
        if (!category) {
          reject(boom.notFound("Category not found"));
        }
        resolve(category);
      }, 300);
    });
  }
  update(id, changes) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.categories.findIndex((item) => item.id === id);
        if (index === -1) {
          reject(boom.notFound("Category not found"));
        }
        const category = this.categories[index];
        this.categories[index] = {
          ...category,
          ...changes,
        };
        resolve(this.categories[index]);
      }, 300);
    });
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const index = this.categories.findIndex((item) => item.id === id);
        if (index === -1) {
          reject(boom.notFound("Category not found"));
        }
        this.categories.splice(index, 1);
        resolve();
      }, 300);
    });
  }
}

module.exports = CategoriesService;
