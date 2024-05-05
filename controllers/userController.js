const userModel = require("../models/User")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const userController = {
    create: async(req, res) => {
        try {
            const { usuario, email, senha } = req.body;
    
            // Verificar se o e-mail já está em uso
            const existingEmailUser = await userModel.findOne({ email });
            if (existingEmailUser) {
                return res.status(400).json({ message: 'O e-mail já está em uso' });
            }
    
            // Verificar se o nome de usuário já está em uso
            const existingUsernameUser = await userModel.findOne({ usuario });
            if (existingUsernameUser) {
                return res.status(400).json({ message: 'O nome de usuário já está em uso' });
            }
    
            // Se o e-mail e o nome de usuário não estiverem em uso, criar um novo usuário
            bcrypt.hash(senha, saltRounds, async function(err, hash) {
                if (err) {
                    console.log(err);
                    return res.status(500).send('Erro ao fazer o hash da senha');
                }
    
                const newUser = await userModel.create({ usuario, email, senha: hash });
                res.status(201).json({ newUser, msg: 'Usuário criado com sucesso!' });
            });
        } catch (error) {
            console.log(error);
            res.status(500).send('Erro no servidor');
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
            const { usuario, senha } = req.body;
            const user = await userModel.findOne({ usuario });
        
            if (!user) {
              return res.status(400).send('Usuário não encontrado');
            }
        
            const isMatch = await bcrypt.compare(senha, user.senha);
        
            if (!isMatch) {
              return res.status(400).send('Senha inválida');
            }
        
            const token = jwt.sign({ userId: user._id }, 'buscaflix_projeto_integrador');
        
            res.status(200).json({ token, msg: 'Login bem-sucedido!', user: user.usuario, id: user._id });
          } catch (error) {
            console.log(error);
            res.status(500).send('Erro no servidor');
          }
    },
    logout: async (req, res) => {

        res.status(200).send('Logout bem-sucedido');
    },
};

module.exports = userController;