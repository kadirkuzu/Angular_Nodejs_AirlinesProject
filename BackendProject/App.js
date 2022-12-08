import express from "express"
import postgresClient from "./config/db.js"
import userRouter from './routers/user-router.js'

const app = express()
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/users',userRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    postgresClient.connect(err=>{
        if(err) console.log(err)
        else console.log("db connection successful")
    })
})