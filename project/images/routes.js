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
    const findStoryImages = async (req, res) => {
        const images = await dao.findStoryImages();
        res.send(images);
      
    }
    const mostRecentImage = async (req, res) => {
        const image = await dao.findMostRecentImage();
        res.send(image);
    };

    const mostRecentImageForUser = async (req, res) => {
        const image = await dao.findMostRecentImageForUser(req.params.userId);
        res.send(image);
    };

    const findImagesByTag = async (req, res) => {
        const tag = req.params.tag;
        const images = await dao.findImagesByTag(tag);
        res.send(images);
    }

    const updateImageLikes = async (req, res) => {
     
            const imageId = req.params.imageId;
            const image = await dao.findImageById(imageId);
            if (!image) return;
            image.likes += 1;
            const updatedImage = await image.save();
            res.json(updatedImage);
        
    };

    const findOneImageById = async (req, res) => {
        const image = await dao.findImageById(req.params.imageId);
        res.json(image);
    }

    app.post("/api/images", createImage);
    app.get("/api/images/recent", mostRecentImage);
    app.get("/api/images", findAllImages);
    app.get("/api/images/story", findStoryImages);
    app.get("/api/images/:userId", findImagesForUser);
    app.get("/api/images/:userId/recent", mostRecentImageForUser);
    app.get("/api/images/:tag/tag", findImagesByTag);
    app.post("/api/images/:imageId/likes", updateImageLikes);
    app.get("/api/images/id/:imageId", findOneImageById);
};