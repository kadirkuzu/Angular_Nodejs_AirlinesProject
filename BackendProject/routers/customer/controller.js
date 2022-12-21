import pool from "../../config/db.js"
import * as queries from "./queries.js"

export const getAll = (req,res) =>{
    pool.query(queries.getAll,(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else res.status(200).json(results.rows)
    })
}

export const getModels = (req,res) =>{
    pool.query(queries.getModels,(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else res.status(200).json(results.rows)
    })
}

export const getById = (req,res) =>{
    const id = req.params.id ;
    pool.query(queries.getById,[id],(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Aircraft not found."})
        else res.status(200).json(results.rows[0])
    })
}

export const add = (req,res) =>{
    const {email,name,phone,nationality,dob} = req.body
    pool.query(queries.checkEmailExist,[email],(error,results)=>{
        if(error) res.status(404).json({message:error.message})
        else if(results.rows.length) res.status(404).json({message:"Email already exists."})
        else {
            pool.query(queries.checkPhoneExist,[phone],(error,results)=>{
                if(error) res.status(404).json({message:error.message})
                else if(results.rows.length) res.status(404).json({message:"Phone already exists."})
                else pool.query(queries.add,[email,name,phone,nationality,dob,0],(error,results)=>{
                    if(error) res.status(404).json({message:error.message})
                    else res.status(201).json({user:results.rows[0]})
                })
            })

        }
    })
}

export const update = (req,res) =>{
    const {id} = req.params
    const values = [req.body.name,req.body.code,req.body.city,req.body.country,req.body.planeCapacity,req.body.yearBuilt, req.body.airportManagementId,id]
    pool.query(queries.update,values,(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Aircraft not found."})
        else res.status(200).json({updatedAirport:results.rows[0]})
    })
}

export const deleteOne = (req,res) =>{
    const {id} = req.params
    pool.query(queries.deleteOne,[id],(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Aircraft not found."})
        else res.status(200).json({deletedAirport:results.rows[0]})
    })
}

export const addModel = (req,res) =>{
    const {manufacturerId,modelName,capacity} = req.body
    pool.query(queries.checkModelExist,[modelName],(error,results)=>{
        if(error) res.status(404).json({message:error.message})
        else if(results.rows.length) res.status(404).json({message:"Model already exists."})
        else {
            pool.query(queries.addModel,[manufacturerId,modelName,capacity],(error,results)=>{
                if(error) res.status(404).json({message:error.message})
                else res.status(201).json(results.rows)
            })
        }
    })
}