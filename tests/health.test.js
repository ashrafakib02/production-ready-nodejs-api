import request from "supertest";
import app from "../src/app.js";

describe("Health endpoint", () => {
  it("should return server health", async () => {
    const res = await request(app).get("/api/v1/health");

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.message).toBe("Server is healthy from get health");
  });
});