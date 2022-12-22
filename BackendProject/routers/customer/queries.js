let name = `"Customers"`
export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const add = `INSERT INTO ${name} (email,name,phone,nationality,dob) VALUES ($1,$2,$3,$4,$5) RETURNING *`
export const update = `UPDATE ${name} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`
export const checkEmailExist = `SELECT s FROM ${name} s WHERE s.email = $1`
export const checkPhoneExist = `SELECT s FROM ${name} s WHERE s.phone = $1`

