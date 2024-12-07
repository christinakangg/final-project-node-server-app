import * as dao from "./dao.js";

export default function ImageRoutes(app) {
    const createImage = async (req, res) => {
        const image = await dao.createImage(req.body);
        res.json(image);
    };

    const findAllImages = async (req, res) => {
        const images = await dao.findAllImages();
        res.send(images);
    };

    const findImagesForUser = async (req, res) => {
        const userId = req.params.userId;
        const images = await dao.findAllImagesForUser(userId);
        res.send(images);
    };

    app.post("/api/images", createImage);
    app.get("/api/images", findAllImages);
    app.get("/api/images/:userId", findImagesForUser);
};