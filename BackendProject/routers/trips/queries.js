let name = `"Trips"`
export const getAll = `SELECT * from ${name}`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const add = `INSERT INTO ${name} ("flightId","customerId","tripRating","paymentId") VALUES ($1,$2,$3) RETURNING *`
export const update = `UPDATE ${name} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`
export const checkTripExist = `SELECT * FROM ${name} s WHERE "flightId" = $1 AND "customerId" = $2`
