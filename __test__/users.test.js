import app from "../app/app.js";
import request from "supertest";
import { UserCtrl } from "../controllers/index.js";

describe("GET /EndPoints", () => {
  test("Should respond whit a 200 status code", async () => {
    const response = await request(app).get("/api/users").send();
    expect(response.statusCode).toBe(200);
  });

  test("getAllUser/ Should respond whit an array", async () => {
    const response = await request(app).get("/api/users").send();
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe("POST /EndPoints", () => {
  //Crete a new user
  test(" Should respond whit a 201 status code", async () => {
    const data = {
      name: "jaime amilcar catari sinsaya",
      email: "jac.s9325@gmail.com",
      password: "123send232",
    };
    try {
      const response = await request(app).post("/api/favs").send(data);
      expect(response.statusCode).toBe(201);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  });

  test(" Should respond whitan array", async () => {
    const data = {
      name: "jaime amilcar catari sinsaya",
      email: "jac.s9325@gmail.com",
      password: "123send232",
    };
    try {
      const response = await request(app).post("/api/favs").send(data);
      expect(response.body).toBeInstanceOf(Array);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  });
});
