import express from "express"
import dotenv from "dotenv"
import pool,{createDatabaseINE} from "./config/db.js"
import userRouter from './routers/user/router.js'
import airportRouter from './routers/airport/router.js'
import companiesRouter from './routers/companies/router.js'
import aircraftsRouter from './routers/aircraft/router.js'
import customersRouter from './routers/customer/router.js'
import employeesRouter from './routers/employees/router.js'
import routeRouter from './routers/route/router.js'
import flightsRouter from './routers/flights/router.js'
import tripsRouter from './routers/trips/router.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors({origin: 'http://localhost:4200'}));

const PORT = process.env.PORT || 3000

await createDatabaseINE()

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
    pool.connect(err=>{
        if(err) console.log(err)
        else console.log("db connection successful")
    })
})

app.use('/users',userRouter)

app.use('/airports',airportRouter)

app.use('/aircrafts',aircraftsRouter)

app.use('/companies',companiesRouter)

app.use('/customers',customersRouter)

app.use('/employees',employeesRouter)

app.use('/routes',routeRouter)

app.use('/flights',flightsRouter)

app.use('/trips',tripsRouter)