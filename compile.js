const nunjucks = require("nunjucks");

const res = nunjucks.render("index.njk", { });
console.log(res);
