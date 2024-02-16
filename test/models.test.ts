import { ArticleModel, Article } from "../app/models/Article";

describe("ArticleModel", () => {
    test("should create an ArticleModel instance", () => {
        const carsInstance = new ArticleModel();

        expect(carsInstance).toBeInstanceOf(ArticleModel);
    });

    test("should have correct table name", () => {
        expect(ArticleModel.tableName).toBe("article");
    });

    test("should create an ArticleModel object with correct properties", () => {
        const articleData: Article = {
            id: 3580678807490560,
            title: "10 Tempat Wisata di Jogja Terbaik: Semua Tempat Seru yang Bisa Kamu Kunjungi di Yogyakarta!",
            category: "Wisata",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image_url: "https://res.cloudinary.com/dqlnqil8f/image/upload/v1707401049/mh1mxppb3tulrbe6djnu.png"
        };

        const carsInstance = ArticleModel.fromJson(articleData);

        expect(carsInstance).toMatchObject(articleData);
    });
});