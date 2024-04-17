const userModel = require("../models/User")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userController = {
    create: async(req,res) => {
        try {
            const user = {
                usuario: req.body.usuario,
                email: req.body.email,
            }

            bcrypt.hash(req.body.senha, saltRounds, async function(err, hash) {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Erro ao fazer o hash da senha');
                }

                user.senha = hash;

                const response = await userModel.create(user)
                res.status(201).json({ response, msg:'Usuario criado com sucesso!'})
            });
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res)=>{
        try {
            const user = await userModel.find()

            res.json(user)
        } catch (error) {
            console.log(error);
        }
    },
    get: async (req,res) =>{
        try {
            const id = req.params.id;
            const user = await userModel.findById(id)

            if (!user) {
                res.status(404).json({msg: "Usuario não encontrado"})
                return;
            }
            res.json(user)
        } catch (error) {
            console.log(error);
        }
    },
    delete: async (req,res) =>{
        try {
            const id = req.params.id;
            const user = await userModel.findById(id)

            if (!user) {
                res.status(404).json({msg: "Usuario não encontrado"})
                return;
            }
            
            const deletedUser = await userModel.findByIdAndDelete(id)
            res.status(200).json({deletedUser,msg: "Usuario deletado com sucesso"})

        } catch (error) {
            console.log(error);
        }
    },
    update: async (req,res) => {
        const id = req.params.id;
        const user = {
            usuario: req.body.usuario,
            email: req.body.email,
        }
    
        bcrypt.hash(req.body.senha, saltRounds, async function(err, hash) {
            if (err) {
                console.log(err);
                return res.status(500).send('Erro ao fazer o hash da senha');
            }
    
            user.senha = hash;
    
            const updatedUser = await userModel.findByIdAndUpdate(id, user)
    
            if (!updatedUser) {
                res.status(404).json({msg: "Usuario não encontrado"})
                return;
            }
            res.status(200).json({user, msg: "Usuario atualizado com sucesso"})
        });
    },    
    login: async (req, res) => {
        try {
            const { email, senha } = req.body;
            const user = await userModel.findOne({ email });
    
            if (!user) {
                return res.status(400).send('Usuário não encontrado');
            }
    
            const isMatch = await bcrypt.compare(senha, user.senha);
    
            if (!isMatch) {
                return res.status(400).send('Senha inválida');
            }
    
            
            res.status(200).json({ msg: 'Login bem-sucedido!', user: user.usuario });
        } catch (error) {
            console.log(error);
        }
    },    
};

module.exports = userController;