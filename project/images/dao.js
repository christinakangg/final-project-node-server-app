import model from "./model.js"

export const createImage = async (image) => {
    const imageCopy = { ...image };
    delete imageCopy._id;
    const createdImage = await model.create(imageCopy);
    return createdImage;
}

export const findImageById = async (imageId) => {
        const image = await model.findById(imageId);
        return image;
 
};


export const findAllImages = () => model.find();

export const findAllImagesForUser = (userId) => {
     return model.find({ userId: userId });
}

export const findMostRecentImage = () => {
    const result = model.findOne().sort({ timestamp: -1 });
    return result;
}


export const findStoryImages =  () => {
    const dayStart = new Date();
    dayStart.setHours(0, 0, 0, 0); //midnight of the current day
    const dayEnd = new Date();
    dayEnd.setHours(23, 59, 59, 999);
    return model.find({
        timestamp: {
            $gte: dayStart,
            $lte: dayEnd,
        }
    })
};