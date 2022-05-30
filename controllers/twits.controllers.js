const Twit = require("../models/Twit.model");

module.exports.twitController = {
  postTwit: (req, res) => {
    Twit.create({
      name: req.body.name,
      text: req.body.text,
    }).then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
  pathTwit: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      text: req.body.text,
    }).then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
  deleteTwit: (req, res) => {
    Twit.findByIdAndRemove(req.params.id).then(data => {
      return res.json("удалено")
    }).catch(err => {
      return res.json(err)
    })
  },
  getTwit: (req, res) => {
    Twit.find().populate("like").then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
  getTwitById: (req, res) => {
    Twit.findById(req.params.id).then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
  addLike: (req, res) => {
    Twit.findByIdAndUpdate(req.params.id, {
      $push: {
        like: req.body.like,
      },
    }).then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
};
