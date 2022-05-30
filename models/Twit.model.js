const express = require("express");
const mongoose = require("mongoose");


const twitSchema = mongoose.Schema({
    name: String,
    text: String,
    like: [
        {
            ref: "User",
            type: mongoose.SchemaTypes.ObjectId
        }
    ]
})

const Twit = mongoose.model("Twit", twitSchema);

module.exports = Twit;