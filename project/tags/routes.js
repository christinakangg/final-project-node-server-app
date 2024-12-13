import * as dao from "./doa.js";

export default function TagRoutes(app) {
    const createTag = async (req, res) => {
        const tag = await dao.createTag(req.body);
        res.json(tag);
    };

    const deleteTagByName = async (req, res) => {
        const status = await dao.removeTagByName(req.params.name);
        res.json(status);
    };

    const findAllTags = async (req, res) => {
        const tags = await dao.findAllTags();
        res.json(tags);
    }

    const findTagByName = async (req, res) => {
        const tag = await dao.findTagByName(req.params.name);
        res.json(tag);
    }

    app.post("/api/tags", createTag);
    app.delete("/api/tags/:name", deleteTagByName);
    app.get("/api/tags", findAllTags);
    app.get("/api/tags/:name", findTagByName);
}