let name = "users"
export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const register = `INSERT INTO ${name} (fullname,email,age,password) VALUES ($1,$2,$3,crypt($4,gen_salt('bf'))) RETURNING fullname,email,age`
export const checkEmailExist = `SELECT s FROM ${name} s WHERE s.email = $1`
export const login = `SELECT * FROM ${name} WHERE email = $1 AND password = crypt($2,password)`
export const update = `UPDATE ${name} SET name = $1 , email = $2 , age = $3 where id = $4 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`