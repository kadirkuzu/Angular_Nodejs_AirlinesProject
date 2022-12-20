import pool from "../../config/db.js"
import * as queries from "./queries.js"

export const getAll = (req,res) =>{
    const {companyType} = req.query
    queries.changeName(companyType)
    pool.query(queries.getAll,(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else res.status(200).json(results.rows)
    })
}

export const getById = (req,res) =>{
    const {id,companyType} = req.params ;
    queries.changeName(companyType)
    pool.query(queries.getById,[id],(error,results) => {
        if (error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:`${companyType} not found.`})
        else res.status(200).json(results.rows[0])
    })
}

export const add = (req,res) =>{
    const {companyType,name,country,city,contactName,contactNumber} = req.body
    queries.changeName(companyType)
    pool.query(queries.checkCompanyExist,[contactName],(error,results)=>{
        if(error) res.status(404).json({message:error.message})
        else if(results.rows.length) res.status(404).json({message:`${companyType} already exists.`})
        else {
            pool.query(queries.add,[name,country,city,contactName,contactNumber],(error,results)=>{
                if(error) res.status(404).json({message:error.message})
                else res.status(201).json(results.rows)
            })
        }
    })
}

export const update = (req,res) =>{
    const {id} = req.params
    const values = [req.body.name,req.body.code,req.body.city,req.body.country,id]
    pool.query(queries.update,values,(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:`${companyType} not found.`})
        else res.status(200).json({updatedAirport:results.rows[0]})
    })
}

export const deleteOne = (req,res) =>{
    const {id,companyType} = req.params ;
    console.log(companyType);
    queries.changeName(companyType)
    pool.query(queries.deleteOne,[id],(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:`${companyType} not found.`})
        else res.status(200).json({deletedAirport:results.rows[0]})
    })
}