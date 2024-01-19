import { ArticleModel } from "../models/Article";

interface Item {
    id: number;
    title: string;
    category: string;
    content: string;
    image_url: string;
}

export default class ArticleRepository {
    async getAll() {
        return await ArticleModel.query() || [];
    }

    async getById(id: number) {
        return await ArticleModel.query().where("id", id).throwIfNotFound();
    }

    async postItem(param: Item) {
        const id = param.id;
        const title = param.title;
        const category = param.category;
        const content = param.content;
        const image_url = param.image_url;

        return await ArticleModel.query()
            .insert({id, title, category, content, image_url})
            .returning("*");
    }

    async updateItem(param: Item) {
        const id = param.id;
        const title = param.title;
        const category = param.category;
        const content = param.content;
        const image_url = param.image_url;

        return await ArticleModel.query()
            .update({id, title, category, content, image_url})
            .where("id", id)
            .returning("*");
    }

    async deleteItem(id: number) {
        return await ArticleModel.query().deleteById(id).throwIfNotFound().returning("*");
    }
}