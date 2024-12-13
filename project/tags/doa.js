import model from "./model.js"

export const createTag = async (tag) => {
    const existingTag = await model.findOne({ name: tag.name });
    if (existingTag) {
        return existingTag;
    }
    const tagCopy = { ...tag };
    delete tagCopy._id;
    const createdTag = await model.create(tagCopy);
    return createdTag;
}

export const removeTagByName = async (name) => {
    const result = await model.deleteOne({ name: name });
    return result;
}

export const findTagByName = async (name) => {
    const tag = await model.findOne({ name: name });
    return tag;
}

export const findAllTags = () => model.find();