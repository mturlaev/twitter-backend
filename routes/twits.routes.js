const {Router} = require("express");
const {twitController} = require("../controllers/twits.controllers");

const router = Router();

router.post("/twits", twitController.postTwit);
router.patch("/twits/:id", twitController.pathTwit);
router.delete("/twits/:id", twitController.deleteTwit);
router.get("/twits", twitController.getTwit);
router.get("/twits/:id", twitController.getTwitById);
router.patch("/twits/:id/like", twitController.addLike);
module.exports = router;