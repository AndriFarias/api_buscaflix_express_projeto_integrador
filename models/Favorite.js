const mongoose = require("mongoose");

const { Schema } = mongoose

const favoriteSchema = new Schema({
    idFilme: {
        type: Number,
        
    },
    urlFoto: {
        type: String,
        
    },
    title: {
        type: String,
        
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
