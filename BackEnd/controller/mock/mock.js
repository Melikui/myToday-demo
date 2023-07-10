"use strict";
const data = require("./data");

class Mock {
  constructor() {}
  async mockApi(req, res, next) {
    res.status(200).json({
      code: 1,
      msg: "sucess",
      data: data,
    });
  }
}
module.exports = new Mock();
