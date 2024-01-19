import { Model, ModelObject } from "objection";

export class ArticleModel extends Model {
    id!: number;
    title!: string;
    category!: string;
    content!: string;
    image_url!: string;

    static get tableName() {
        return "article";
    }
}

export type Article = ModelObject<ArticleModel>;