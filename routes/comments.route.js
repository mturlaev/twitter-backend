const {Router} = require("express");
const {commentController} = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentController.postComment);
router.patch("/comments/:id", commentController.patchComment);
router.delete("/comments/:id", commentController.deleteComment);
router.get("/comments", commentController.getComment);

module.exports = router;