import request from "supertest";
import app from "../app.js";

let token;
let productId;

beforeAll(async () => {
  const loginResponse = await request(app).post("/api/auth/login").send({
    email: "user@email.com",
    password: "strongPass123",
  });

  token = loginResponse.body.token;
});

describe("CRUD /api/products", () => {
  test("GET /api/products debe devolver un array", async () => {
    const response = await request(app).get("/api/products");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /api/products debe crear un producto", async () => {
    const response = await request(app)
      .post("/api/products")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Producto test CRUD",
        price: 1000,
        stock: 10,
      });

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toBe("Producto test CRUD");
    expect(response.body.price).toBe(1000);
    expect(response.body.stock).toBe(10);

    productId = response.body.id;
  });

  test("GET /api/products/:id debe devolver el producto creado", async () => {
    const response = await request(app).get(`/api/products/${productId}`);

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
    expect(response.body.name).toBe("Producto test CRUD");
  });

  test("PUT /api/products/:id debe actualizar el producto", async () => {
    const response = await request(app)
      .put(`/api/products/${productId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Producto test actualizado",
        price: 2000,
        stock: 5,
      });

    expect(response.status).toBe(200);
    expect(response.body.id).toBe(productId);
    expect(response.body.name).toBe("Producto test actualizado");
    expect(response.body.price).toBe(2000);
    expect(response.body.stock).toBe(5);
  });

  test("DELETE /api/products/:id debe eliminar el producto", async () => {
    const response = await request(app)
      .delete(`/api/products/${productId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  test("GET /api/products/:id debe responder 404 luego de eliminar", async () => {
    const response = await request(app).get(`/api/products/${productId}`);

    expect(response.status).toBe(404);
  });
});
