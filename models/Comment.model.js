const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: String,
    userId: {
        ref: "User",
        type: mongoose.SchemaTypes.ObjectId
    },
    twitId: {
        ref: "Twit",
        type: mongoose.SchemaTypes.ObjectId
    },
})

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;