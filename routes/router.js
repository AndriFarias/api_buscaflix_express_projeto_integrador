const router = require("express").Router()

const userRouter = require("./users")
router.use("/", userRouter)


const favoriteRouter = require("./favorites")
router.use("/", favoriteRouter)

module.exports = router;