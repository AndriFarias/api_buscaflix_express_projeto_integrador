require('dotenv').config();
const mongoose = require("mongoose");

async function main(){
    try {
        mongoose.set("strictQuery", true)
        const username = process.env.MONGODB_USERNAME;
        const password = process.env.MONGODB_PASSWORD;
        await mongoose.connect(
            `mongodb+srv://${username}:${password}@cluster0.2ipqtwb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
        )
        console.log("Conectado ao banco");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}
module.exports = main;
