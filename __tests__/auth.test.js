import request from "supertest";
import app from "../app.js";

describe("POST /api/auth/login", () => {
  test("debe responder 401 si las credenciales son incorrectas", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "mal@email.com",
      password: "123456",
    });

    expect(response.status).toBe(401);
  });
});

describe("POST /api/auth/login", () => {
  test("debe responder 200 y devolver un token si las credenciales son correctas", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "user@email.com",
      password: "strongPass123",
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });
});

