import app from "../app/app.js";
import request from "supertest";

describe("GET /EndPoints", () => {
  test("getAllFavs/ Should respond whit a 200 status code", async () => {
    const response = await request(app).get("/api/favs").send();
    expect(response.statusCode).toBe(200);
  });

  test("getAllFavs/ Should respond whit an array", async () => {
    const response = await request(app).get("/api/favs").send();
    expect(response.body).toBeInstanceOf(Array);
  });

  // Get one fav
  test(" Should respond whit a 200 status code", async () => {
    const response = await request(app)
      .get("/api/favs/6285179b84d2e42cb52a1ab1")
      .send();
    expect(response.statusCode).toBe(200);
  });

  test(" Should respond whit a 500 status code", async () => {
    const response = await request(app).get("/api/favs/newlist").setEncoding();
    expect(response.statusCode).toBe(500);
  });
});

describe("POST /EndPoints", () => {
  test(" Should respond whit a 201 status code", async () => {
    const data = {
      name: "my first list of favourits",
      list_favs: [
        {
          title: "music test 1",
          description: " artist 1",
          enlace: "www.youtube.com",
        },
      ],
    };
    try {
      const response = await request(app).post("/api/favs").send(data);
      expect(response.statusCode).toBe(201);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  });

  test(" Should respond whit an Array", async () => {
    const data = {
      name: "my first list of favourits",
      list_favs: [
        {
          title: "music test 1",
          description: " artist 1",
          enlace: "www.youtube.com",
        },
      ],
    };
    try {
      const response = await request(app).post("/api/favs").send(data);
      expect(response.body).toBeInstanceOf(Array);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  });
});
