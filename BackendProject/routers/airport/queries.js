let name = `"Airports"`
export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const add = `INSERT INTO ${name} (name,code,city,country,"airportManagementId","planeCapacity","yearBuilt") VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const update = `UPDATE ${name} SET name = $1 , code = $2 , city = $3 , country = $4 where id = $5 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`
export const checkAirportExist = `SELECT s FROM ${name} s WHERE s.code = $1`
