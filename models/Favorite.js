const mongoose = require("mongoose");

const { Schema } = mongoose

const favoriteSchema = new Schema({
    idFilme: {
        type: Number,
        require: true
    },
    urlFoto: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    sources: {
        type: [String],
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {timestamps: true}
)

const Favorite = mongoose.model("Favorite", favoriteSchema)

module.exports = Favorite;
