let communityController = module.exports;
const assert = require("assert")
const Definer = require("../lib/mistakes")
const Community = require("../models/Community")

communityController.imageInsertion = async (req, res) => {
    try {
        console.log("Post: cont/imageInsertion");
        assert.ok(req.file, Definer.general_err3);

        const image_url = req.file.path;
        res.json({ state: "success", data: image_url })

    } catch (err) {
        console.log(`Error, cont/imageInsertion, ${err.message}`)
        res.json({ state: "failed", message: err.message })
    }
}
communityController.createArticle = async (req, res) => {
    try {
        console.log("Post: cont/createArticle");

        const community = new Community();
        const result = await community.createArticleData(req.member, req.body);
        assert.ok(result, Definer.general_err1);

        res.json({ state: "success", data: result })
    } catch (err) {
        console.log(`Error, cont/createArticle, ${err.message}`)
        res.json({ state: "failed", message: err.message })
    }
}