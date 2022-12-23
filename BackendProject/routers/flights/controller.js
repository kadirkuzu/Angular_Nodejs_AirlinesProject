import pool from "../../config/db.js"
import * as queries from "./queries.js"

export const getAll = (req,res) =>{
    pool.query(queries.getAll,(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else res.status(200).json(results.rows)
    })
}

export const getById = (req,res) =>{
    const id = req.params.id ;
    pool.query(queries.getById,[id],(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Route not found."})
        else res.status(200).json(results.rows[0])
    })
}

export const add = (req,res) =>{
    const {CCrewId,GSCrewId,aircraftId,flightDate,routeId} = req.body
    pool.query(queries.checkFlightExist,[CCrewId,GSCrewId,aircraftId,flightDate,routeId],(error,results)=>{
        if(error) res.status(404).json({message:error.message})
        else if(results.rows.length) res.status(404).json({message:"Flight already exists."})
        else {
            pool.query(queries.add,[CCrewId,GSCrewId,aircraftId,flightDate,routeId],(error,results)=>{
                if(error) res.status(404).json({message:error.message})
                else res.status(201).json(results.rows)
            })
        }
    })
}

export const update = (req,res) =>{
    const {id} = req.params
    const values = [req.body.name,req.body.code,req.body.city,req.body.country,req.body.planeCapacity,req.body.yearBuilt, req.body.airportManagementId,id]
    pool.query(queries.update,values,(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Route not found."})
        else res.status(200).json({updatedAirport:results.rows[0]})
    })
}

export const deleteOne = (req,res) =>{
    const {id} = req.params
    pool.query(queries.deleteOne,[id],(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Route not found."})
        else res.status(200).json({deletedAirport:results.rows[0]})
    })
}