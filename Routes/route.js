const authRoute = require("./authRoute");
const boardRoute = require("./boardRoute")
const taskRoute = require("./taskRoute")


const routes = [
    authRoute,
    boardRoute,
    taskRoute
]



module.exports = routes