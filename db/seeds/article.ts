import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("article").del();

    // Inserts seed entries
    await knex("article").insert([
        { 
            id: 1, 
            title: "10 Tempat Wisata Bali",
            category: "Wisata",
            content: "Lorem ipsum dolor sit amet",
            image_url: "http://image.png" 
        }
    ]);
}
