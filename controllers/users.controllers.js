const User = require("../models/User.model");

module.exports.userController = {
  postUser: (req, res) => {
    User.create({
      name: req.body.name,
    }).then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
  deleteUser: (req, res) => {
    User.findByIdAndDelete(req.params.id).then(data => {
      return res.json("удалено")
    }).catch(err => {
      return res.json(err)
    })
  },
  pathUser: (req, res) => {
      User.findByIdAndUpdate(req.params.id, {
          name: req.body.name
      }).then(data => {
        return res.json(data)
      }).catch(err => {
        return res.json(err)
      })
  },
  addSaveTwit: (req, res) => {
      User.findByIdAndUpdate(req.params.id, {
          $push: {
              saveTwit: req.body.saveTwit
          }
      }).then(data => {
        return res.json(data)
      }).catch(err => {
        return res.json(err)
      })
  },
  getUser: (req, res) => {
    User.find().then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
  getUserById: (req, res) => {
    User.findById(req.params.id).then(data => {
      return res.json(data)
    }).catch(err => {
      return res.json(err)
    })
  },
};
