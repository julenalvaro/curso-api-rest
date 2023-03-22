const faker = require("faker");
const boom = require("@hapi/boom");

class OrdersService {
  constructor() {
    this.orders = [];
    this.generateRandomOrders();
  }

  generateRandomOrders() {
    const limit = 50;
    for (let index = 0; index < limit; index++) {
      this.orders.push({
        id: faker.datatype.uuid(),
        fecha: faker.date.recent(),
        usuarioId: faker.datatype.uuid(),
        total: faker.commerce.price(),
      });
    }
  }

  create(data) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const newOrder = {
          id: faker.datatype.uuid(),
          ...data,
        };
        this.orders.push(newOrder);
        resolve (newOrder);
      }, 300);
    });
  }

  find() {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve (this.orders);
      }, 300);
    });
  }

  findOne(id) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const order = this.orders.find((item) => item.id === id);
        if (!order) {
          reject (boom.notFound("Order not found"));
        }
        resolve (order);
      }, 300);
    });
  }

  update(id, changes) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const index = this.orders.findIndex((item) => item.id === id);
        if (index === -1) {
          reject (boom.notFound("Order not found"));
        }
        const order = this.orders[index];
        this.orders[index] = {
          ...order,
          ...changes,
        };
        resolve (this.orders[index]);
      }, 300);
    });

  }

  delete(id) {
    return new Promise ((resolve, reject) => {
      setTimeout(() => {
        const index = this.orders.findIndex((item) => item.id === id);
        if (index === -1) {
          reject (boom.notFound("Order not found"));
        }
        this.orders.splice(index, 1);
        resolve ({ id });
      }, 300);
    });
  }

}

module.exports = OrdersService;
