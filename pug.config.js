var stores = require("./data/stores.js")
var articles = require("./data/articles.js")
var brands = require("./data/brands.js")
var customers = require("./data/customers.js")

module.exports = {
    pretty: true,
    locals: {
        stores,
        articles,
        brands,
        customers,
    },
}
