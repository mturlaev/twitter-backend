const {Router} = require("express");
const {userController} = require("../controllers/users.controllers");

const router = Router();

router.post("/users", userController.postUser);
router.patch("/users/:id", userController.pathUser);
router.delete("/users/:id", userController.deleteUser);
router.get("/users", userController.getUser);
router.get("/users/:id", userController.getUserById);
router.patch("/users/:id/saveTwit", userController.addSaveTwit);

module.exports = router;