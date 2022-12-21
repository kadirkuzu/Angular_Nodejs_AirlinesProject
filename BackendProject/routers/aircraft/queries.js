let name = `"Aircrafts"`
let models = `"AircraftModels"`
let owners = `"PlaneOwners"`
export const getAll = `SELECT ${name}.id,${name}."ownerId",${name}."modelId",${name}."aircraftName",${name}."yearBought",${owners}.name as "ownerName",${models}."modelName" as "modelName" FROM ${name}
 INNER JOIN ${owners} ON ${name}."ownerId"=${owners}.id
 INNER JOIN ${models} ON ${name}."modelId"=${models}.id`
 
export const getById = `${getAll} WHERE ${name}.id = $1 `
export const add = `INSERT INTO ${name} ("ownerId","modelId","aircraftName","yearBought") VALUES ($1,$2,$3,$4) RETURNING *`
export const update = `UPDATE ${name} SET "ownerId" = $1 , "modelId" = $2 , "aircraftName" = $3 , "yearBought" = $4 where id = $5 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`
export const checkAircraftExist = `SELECT s FROM ${name} s WHERE s."aircraftName" = $1`


export const getModels = `SELECT * FROM ${models} ORDER BY id ASC`
export const checkModelExist = `SELECT s FROM ${models} s WHERE s."modelName" = $1`
export const addModel = `INSERT INTO ${models} ("manufacturerId","modelName",capacity) VALUES ($1,$2,$3) RETURNING *`

