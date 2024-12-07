import model from "./model.js"

export const createImage = (image) => {
    delete image._id
    return model.create(image);
}

export const findAllImages = () => model.find();

export const findAllImagesForUser = (userId) => {
     model.find({ userId: userId });
}