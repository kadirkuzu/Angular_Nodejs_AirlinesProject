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
        else if(!results.rows.length) res.status(404).json({message:"User not found."})
        else res.status(200).json(results.rows[0])
    })
}

export const add = (req,res) =>{
    const {name,email,fullName,age,password} = req.body
    pool.query(queries.checkEmailExist,[email],(error,results)=>{
        if(error) res.status(404).json({message:error.message})
        else if(results.rows.length) res.status(404).json({message:"Email already exists."})
        else {
            pool.query(queries.add,[name,email,fullName,age,password],(error,results)=>{
                if(error) res.status(404).json({message:error.message})
                res.status(201).json(results.rows)
            })
        }
    })
}

export const login = (req,res) =>{
    const {email,password} = req.body
    pool.query(queries.login,[email,password],(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"Email or password is wrong"})
        else res.status(201).json({user:results.rows[0]})
    })
}

export const update = (req,res) =>{
    const {id} = req.params
    const values = [req.body.name,req.body.email,req.body.fullName,req.body.age,id]
    pool.query(queries.update,values,(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"User not found."})
        else res.status(200).json({updatedUser:results.rows[0]})
    })
}

export const deleteOne = (req,res) =>{
    const {id} = req.params
    pool.query(queries.deleteOne,[id],(error,results) => {
        if(error) res.status(404).json({message:error.message})
        else if(!results.rows.length) res.status(404).json({message:"User not found."})
        else res.status(200).json({deletedUser:results.rows[0]})
    })
}