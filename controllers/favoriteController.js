const favoriteModel = require("../models/Favorite");

const favoriteController = {
    create: async(req,res) => {
        try {
            const favorite = {
                idFilme: req.body.idFilme,
                urlFoto: req.body.urlFoto,
                title: req.body.title,
                sources: req.body.sources,
                usuario: req.body.usuario,
            }
            const response = await favoriteModel.create(favorite)
            res.status(201).json({ response, msg:'Adicionado a lista de favoritos com sucesso!'})
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res)=>{
        try {
            const favorite = await favoriteModel.find()

            res.json(favorite)
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req,res) =>{
        try {
            const id = req.params.id;
            const favorite = await favoriteModel.findById(id)

            if (!favorite) {
                res.status(404).json({msg: "Favorito não encontrado"})
                return;
            }
            res.json(favorite)
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req,res) =>{
        try {
            const id = req.params.id;
            const favorite = await favoriteModel.findById(id)

            if (!favorite) {
                res.status(404).json({msg: "Favorito não encontrado"})
                return;
            }
            
            const deletedFavorite = await favoriteModel.findByIdAndDelete(id)
            res.status(200).json({deletedFavorite,msg: "Favorito deletado com sucesso"})

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req,res) =>{
            const id = req.params.id;
            const favorite = {
                idFilme: req.body.idFilme,
                urlFoto: req.body.urlFoto,
                title: req.body.title,
                sources: req.body.sources,
                usuario: req.body.usuario,
            }
            
            const updatedFavorite = await favoriteModel.findByIdAndUpdate(id,favorite)

            if (!updatedFavorite) {
                res.status(404).json({msg: "Favorito não encontrado"})
                return;
            }
            res.status(200).json({favorite,msg: "Usuario atualizado com sucesso"})

      
    },
    getUserFavorites: async (req, res) => {
        try {
            const userId = req.params.userId;
            const favorites = await favoriteModel.find({ usuario: userId });

            if (!favorites) {
                res.status(404).json({ msg: "Favoritos não encontrados para este usuário" });
                return;
            }

            res.json(favorites);
        } catch (error) {
            console.log(error);
        }
    },

}

module.exports = favoriteController;