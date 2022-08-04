const routes = require("express").Router();
const controller = require("../controller/controller");

routes.route("/api/signup").post(controller.create_user);
routes.route("/api/signin").post(controller.get_user);
routes.route("/api/transactions").post(controller.create_transactions).get(controller.get_transactions).delete(controller.delete_transactions);

module.exports = routes;
