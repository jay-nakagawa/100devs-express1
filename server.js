const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MongoClient = require('mongodb').MongoClient
const PORT = process.env.PORT || 3000
const cors = require('cors')
// const client = new MongoClient(connectDB)

require('dotenv').config()

app.use(cors())
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())







let conn

const connectDB = async () => {
    try {
        conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
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

const Cat = mongoose.model('Cat', { name: String });

let db,
    // dbConnectionStr = process.env.DB_STRING,
    dbName = 'test'

app.get("/", async (req, res) => {

    // let item = await conn.db("my_db")
    //             .collection("my_collection")
    //             .findOne({my_item: my_item})


    

    const kitty = new Cat({ name: 'Zildjian' });
    await kitty.save()

    return res.json({test: 1})
})

app.get("/cats", async (req, res) => {

   let cats = await Cat.find()
   

    return res.json(cats)
})
