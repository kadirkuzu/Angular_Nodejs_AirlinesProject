import express from "express"
import dotenv from "dotenv"
import pool,{createDatabase} from "./config/db.js"
import userRouter from './routers/user/router.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({origin: 'http://localhost:4200'}));

const PORT = process.env.PORT || 3000

await createDatabase()
app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    pool.connect(err=>{
        if(err) console.log(err)
        else console.log("db connection successful")
    })
})

app.use('/users',userRouter)