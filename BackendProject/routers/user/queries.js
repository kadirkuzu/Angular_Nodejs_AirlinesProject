let name = `"Users"`
export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const getById = `SELECT * FROM ${name} WHERE id = $1 
SELECT "get_most_referenced_customer_name"() as "bestCustomer";
SELECT "get_total_payments"() as "totalPayments";
SELECT "count_customer"() as "totalPayments";
SELECT "get_trip_count"() as "tripCount";
`
export const register = `INSERT INTO ${name} (email,name,phone,nationality,dob,password) VALUES ($1,$2,$3,$4,$5,crypt($6,gen_salt('bf'))) RETURNING name,email,phone,dob`
export const checkEmailExist = `SELECT s FROM ${name} s WHERE s.email = $1`
export const checkPhoneExist = `SELECT s FROM ${name} s WHERE s.phone = $1`
export const login = `SELECT * FROM ${name} WHERE email = $1 AND password = crypt($2,password)`
export const update = `UPDATE ${name} SET name = $1 , email = $2 , age = $3 where id = $4 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`