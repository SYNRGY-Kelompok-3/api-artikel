import { Response, Request } from "express";
import ArticleService from "../app/services/article";

const controllers = require("../app/controllers/controllers");
const articleData = {
    id: 3580678807490560,
    title: "10 Tempat Wisata di Jogja Terbaik: Semua Tempat Seru yang Bisa Kamu Kunjungi di Yogyakarta!",
    category: "Wisata",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image_url: "https://res.cloudinary.com/dqlnqil8f/image/upload/v1707401049/mh1mxppb3tulrbe6djnu.png"
};

jest.mock("../app/services/article");

describe("ArticleControllers", () => {
    describe("getItem", () => {
        test("should return item with status 200", async () => {
            const req = {} as Request;
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            (ArticleService as jest.Mock).mockImplementation(() => {
                return {
                    getAll: jest.fn().mockResolvedValue(articleData)
                };
            });

            await controllers.getItem(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(articleData);
        });
    });

    describe("getItemById", () => {
        test("should return item by id with status 200", async () => {
            const req = {
                params: {id: 3580678807490560}
            } as unknown as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            (ArticleService as jest.Mock).mockImplementation(() => {
                return {
                    getById: jest.fn().mockResolvedValue(articleData)
                };
            });

            await controllers.getItemById(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(articleData);
        });
    });

    describe("postItem", () => {
        test("should post item with status 201", async () => {
            const req = {
                body: articleData,
                file: {filename: "test-image.jpg"}
            } as unknown as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            (ArticleService as jest.Mock).mockImplementation(() => {
                return {
                    postItem: jest.fn().mockResolvedValue(articleData)
                };
            });

            await controllers.postItem(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(articleData);
        });
    });

    describe("putItem", () => {
        test("should put item with status 201", async () => {
            const req = {
                params: {id: 3580678807490560},
                body: articleData,
                file: {filename: "test-image.jpg"}
            } as unknown as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            (ArticleService as jest.Mock).mockImplementation(() => {
                return {
                    updateItem: jest.fn().mockResolvedValue(articleData)
                };
            });

            await controllers.putItem(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(articleData);
        });
    });

    describe("deleteItem", () => {
        test("should delete item with status 201", async () => {
            const req = {
                params: {id: 3580678807490560}
            } as unknown as Request;

            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn()
            } as unknown as Response;

            (ArticleService as jest.Mock).mockImplementation(() => {
                return {
                    deleteItem: jest.fn().mockResolvedValue(undefined)
                };
            });

            await controllers.deleteItem(req, res);

            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ 
                status: 201,
                message: "Successfully delete article!" 
            });
        });
    });
});