const knex = require("knex");
const { Model } = require("objection");

const knexInstance = knex({
    client: "postgresql",
    connection: {
        database: "api_kel_3",
        user: "user01",
        password: "admin01"
    }
});

const databaseConnection = Model.knex(knexInstance);

module.exports = databaseConnection;