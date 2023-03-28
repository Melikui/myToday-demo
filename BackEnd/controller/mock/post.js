"use strict";

const moment = require("moment");

class Post {
    constructor() {}
    async postApi(req, res, next) {
        res.status(200).json({
            code: 1,
            msg: "sucess",
            data: {
                url: req.url,
                baseUrl:req.baseUrl,
                method:req.method,
                query:req.body,
                time:moment().format("YYYY-MM-DD HH:mm:ss"),
            },
        });
    }
}
module.exports = new Post();
