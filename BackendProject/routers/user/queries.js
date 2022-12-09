let name = "users"
export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const add = `INSERT INTO ${name} (name,email,fullname,age,password) VALUES ($1,$2,$3,$4,crypt($5,gen_salt('bf'))) RETURNING *`
export const checkEmailExist = `SELECT s FROM ${name} s WHERE s.email = $1`
export const login = `SELECT * FROM ${name} WHERE email = $1 AND password = crypt($2,password)`
export const update = `UPDATE ${name} SET name = $1 , email = $2 , fullName = $3 , age = $4 where id = $5 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`