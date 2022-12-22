let employees = `"Employees"`
let pilots = `"Pilots"`
let groundServiceChefs = `"GroundServicesChiefs"`
let groundServicePersonels = `"GroundServicesPersonels"`
let cabinPersonels = `"CabinPersonels"`

export const getPilots = `SELECT * FROM ${pilots} ORDER BY id ASC`
export const getGroundServiceChiefs = `SELECT * FROM ${groundServiceChefs} ORDER BY id ASC`
export const getGroundServicePersonels = `SELECT * FROM ${groundServicePersonels} ORDER BY id ASC`
export const getCabinPersonels = `SELECT * FROM ${cabinPersonels} ORDER BY id ASC`
export const getById = `SELECT * FROM ${pilots} WHERE id = $1`

export const addPilot = `INSERT INTO ${pilots} ("yearStarted",email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addGroundServiceChief = `INSERT INTO ${groundServiceChefs} ("yearStarted",email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addGroundServicePersonel = `INSERT INTO ${groundServicePersonels} (email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`
export const addCabinPersonel = `INSERT INTO ${cabinPersonels} (email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`

export const update = `UPDATE ${pilots} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`

export const deleteOne = `DELETE FROM ${pilots} WHERE id = $1 RETURNING *`

export const checkEmployeeExist = `SELECT s FROM ${employees} s WHERE s.email = $1 or s.phone = $2`
