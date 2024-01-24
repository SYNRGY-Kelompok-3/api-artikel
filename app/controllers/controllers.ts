import { Response, Request } from "express";
import ArticleService from "../services/article";

const uuid = require("../../config/utils/uuid");
const cloudinary = require("../../config/utils/cloudinary");

interface MulterFile {
  key: string,
  path: string,
  mimetype: string,
  buffer: Buffer,
  originalname: string,
  size: number,
}

const getItem = async (req: Request, res: Response) => {
    const getAll = await new ArticleService().getAll();

    res.status(200).json(getAll);
};

const getItemById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        const itemById = await new ArticleService().getById(id);
        
        res.status(200).json(itemById);
    } catch (error) {
        return res.status(404).json({
            status: 404,
            message: "Article not found!"
        });
    }
};

const postItem = async (req: Request & {file: MulterFile}, res: Response) => {
    const id = uuid;
    const title = req.body?.title;
    const category = req.body?.category;
    const content = req.body?.content;

    const filebase64 = req.file?.buffer.toString("base64");
    const file = `data:${req.file?.mimetype};base64,${filebase64}`;

    const result = await cloudinary.uploader.upload(file);
    const image_url = result.secure_url;

    const addItem = await new ArticleService().postItem({
        id, title, category, content, image_url
    });

    res.status(201).json(addItem);
};

const putItem = async (req: Request & {file: MulterFile}, res: Response) => {
    const id = Number(req.params.id);
    const title = req.body?.title;
    const category = req.body?.category;
    const content = req.body?.content;

    const filebase64 = req.file?.buffer.toString("base64");
    const file = `data:${req.file?.mimetype};base64,${filebase64}`;

    const result = await cloudinary.uploader.upload(file);
    const image_url = result.secure_url;

    const updateItem = await new ArticleService().updateItem({
        id, title, category, content, image_url
    });

    res.status(201).json(updateItem);
};

const deleteItem = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        await new ArticleService().deleteItem(id);

        return res.status(201).json({
            status: 201,
            message: "Successfully delete article!"
        });
    } catch (error) {
        return res.status(404).json({
            status: 404,
            message: "Article not found!"
        });
    } 
};

module.exports = {
    getItem,
    getItemById,
    postItem,
    putItem,
    deleteItem
};