const request = require("supertest");
const express = require("express");
const path = require("path");

// Importing our aop
const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

describe("Portfolio App Tests", () => {
  it("should serve index.html on root route", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("Gaurav Sharma");
  });
});
