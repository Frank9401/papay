const assert = require("assert");
const Definer = require("../lib/mistakes");
let followController = module.exports;
const Follow = require("../models/Follow")

followController.subscribe = async (req, res) => {
    try {
        console.log(`POST: cont/subscribe`);
        assert.ok(req.member, Definer.auth_err5)

        const follow = new Follow();
        const result = await follow.subscribeData(req.member, req.body)

        res.json({ state: "success", data: "subscribed" })
    } catch (error) {
        console.log(`ERROR, cont/subscribe, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
}