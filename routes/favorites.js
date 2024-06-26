const router = require("express").Router()

const favoriteController = require("../controllers/favoriteController")

router.route("/favorites")
.post((req,res)=> favoriteController.create(req,res))

router.route("/favorites")
.get((req,res)=>favoriteController.getAll(req,res))

router.route("/favorites/:id")
.get((req,res)=> favoriteController.get(req,res))

router.route("/favorites/:id")
.delete((req,res)=> favoriteController.delete(req,res))

router.route("/favorites/:id")
.put((req,res)=> favoriteController.update(req,res))

router.route("/favorites/user/:userId")
.get((req, res) => favoriteController.getUserFavorites(req, res));

module.exports = router;