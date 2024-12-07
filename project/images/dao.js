import model from "./model.js"

export const createImage = async (image) => {
    const imageCopy = { ...image };
    delete imageCopy._id;
    const createdImage = await model.create(imageCopy);
    return createdImage;
}

export const findAllImages = () => model.find();

export const findAllImagesForUser = (userId) => {
     return model.find({ userId: userId });
}