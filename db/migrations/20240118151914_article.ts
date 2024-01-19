import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("article", (table: Knex.TableBuilder) => {
        table.bigInteger("id").primary();
        table.string("title", 255).notNullable();
        table.string("category", 255).notNullable();
        table.text("content").notNullable();
        table.string("image_url", 255).notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("article");
}

