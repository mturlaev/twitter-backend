const Comment = require("../models/Comment.model");

module.exports.commentController = {
    postComment: async (req, res) => {
        try {
            const comment = await Comment.create({
                text: req.body.text,
                userId: req.body.userId,
                twitId: req.body.twitId,
            });
            res.json(comment);
        } catch (err) {
            res.json("ошибка")
        }
    },
    patchComment: async (req, res) => {
        try {
            await Comment.findByIdAndUpdate(req.params.id, {
                text: req.body.text,
                userId: req.body.userId,
                twitId: req.body.textId,
            });
            res.json(data);
        } catch (err) {
            res.json("ошибка")
        }
    },
    deleteComment: async (req, res) => {
        try {
            await Comment.findByIdAndRemove(req.params.id);
            res.json("удалено");
        } catch (err) {
            res.json("ошибка")
        }
    },
    getComment: async (req, res) => {
        try {
            const comment = await Comment.find().populate("userId").populate("twitId");
            res.json(comment)
        } catch (err) {
            res.json("ошибка")
        }
    }
}