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

export const findMostRecentImageForUser = (userId) => {
    return model.findOne({ userId: userId }).sort({ timestamp: -1 });
}

export const findMostRecentImage = () => {
    const result = model.findOne().sort({ timestamp: -1 });
    return result;
}