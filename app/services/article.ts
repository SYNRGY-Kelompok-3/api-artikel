import ArticleRepository from "../repositories/article";

interface Item {
    id: number;
    title: string;
    category: string;
    content: string;
    image_url: string;
}

export default class ArticleService {
    #articleRepository: ArticleRepository;

    constructor() {
        this.#articleRepository = new ArticleRepository();
    }

    async getAll() {
        return await this.#articleRepository.getAll();
    }

    async getById(id: number) {
        return await this.#articleRepository.getById(id);
    }

    async postItem(param: Item) {
        return await this.#articleRepository.postItem(param);
    }

    async updateItem(param: Item) {
        return await this.#articleRepository.updateItem(param);
    }

    async deleteItem(id: number) {
        return await this.#articleRepository.deleteItem(id);
    }
}