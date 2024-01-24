const knex = require("knex");
const { Model } = require("objection");

const knexInstance = knex({
    client: "pg",
    connection: process.env.DATABASE_URL
});

const databaseConnection = Model.knex(knexInstance);

module.exports = databaseConnection;