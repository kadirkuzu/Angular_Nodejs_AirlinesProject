let name = `"Airports"`
let pilots = `"Pilots"`

export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const getPilots = `SELECT * FROM ${pilots} ORDER BY id ASC`
export const getById = `SELECT * FROM ${name} WHERE id = $1`

export const add = `INSERT INTO ${name} (name,code,city,country,"airportManagementId","planeCapacity","yearBuilt") VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addPilot = `INSERT INTO ${pilots} ("yearStarted",email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`

export const update = `UPDATE ${name} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`

export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`

export const checkPilotExist = `SELECT s FROM ${pilots} s WHERE s.email = $1 or s.phone = $2`
