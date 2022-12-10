const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 3000
// const client = new MongoClient(connectDB)

require('dotenv').config()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())








const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://jaynakagawa777:mongod123@cluster0.t6yfhjw.mongodb.net/?retryWrites=true&w=majority");
        console.log(`MongoDB Connected!!!`);
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    })
    
    
 
})


let db,
    // dbConnectionStr = process.env.DB_STRING,
    dbName = 'test'

    app.get("/", async (req, res) => {
        
        let item = await conn.db("my_db")
                    .collection("my_collection")
                    .findOne({my_item: my_item})
    
        return res.json(item)
    })

