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
};
communityController.createArticle = async (req, res) => {
    try {
        console.log("Post: cont/createArticle");
        assert.ok(result, Definer.mongo_validation_error);

        const community = new Community();
        const result = await community.createArticleData(req.member, req.body);
        assert.ok(result, Definer.general_err1);

        res.json({ state: "success", data: result })
    } catch (err) {
        console.log(`Error, cont/createArticle, ${err.message}`)
        res.json({ state: "failed", message: err.message })
    }
};
communityController.getMemberArticles = async (req, res) => {
    try {
        console.log("Post: cont/getMemberArticles");
        const community = new Community();

        const mb_id = req.query.mb_id !== "none" ? req.query.mb_id : req.member?._id;
        assert.ok(mb_id, Definer.article_err1);

        const result = await community.getMemberArticlesData(
            req.member,
            mb_id,
            req.query
        )
        assert.ok(result, Definer.general_err1);

        res.json({ state: "success", data: result })
    } catch (err) {
        console.log(`Error, cont/getMemberArticles, ${err.message}`)
        res.json({ state: "failed", message: err.message })
    }
};

communityController.getArticles = async (req, res) => {
    try {
        console.log("Post: cont/getArticles");
        const community = new Community();

        const result = await community.getArticlesData(req.member, req.query)
        res.json({ state: "success", data: result })
    } catch (err) {
        console.log(`Error, cont/getArticles, ${err.message}`)
        res.json({ state: "failed", message: err.message })
    }
};

communityController.getChosenArticle = async (req, res) => {
    try {
        console.log("Post: cont/getChosenArticle");
        const art_id = req.params.art_id,
            community = new Community(),
            result = await community.getChosenArticlesData(req.member, art_id)
        res.json({ state: "success", data: result })
    } catch (err) {
        console.log(`Error, cont/getChosenArticle, ${err.message}`)
        res.json({ state: "failed", message: err.message })
    }
};