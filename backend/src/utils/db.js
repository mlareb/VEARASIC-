const knex = require("knex");

const db = knex({
  client: "pg",
  connection: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }  // Needed for Render Postgres
});

module.exports = db;
