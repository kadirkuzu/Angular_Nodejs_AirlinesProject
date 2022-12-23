let name = `"Users"`
export const getAll = `SELECT * FROM ${name} ORDER BY id ASC`
export const register = `INSERT INTO ${name} (email,name,phone,nationality,dob,password) VALUES ($1,$2,$3,$4,$5,crypt($6,gen_salt('bf'))) RETURNING name,email,phone,dob`
export const checkEmailExist = `SELECT s FROM ${name} s WHERE s.email = $1`
export const checkPhoneExist = `SELECT s FROM ${name} s WHERE s.phone = $1`
export const login = `SELECT * FROM ${name} WHERE email = $1 AND password = crypt($2,password)`
export const update = `UPDATE ${name} SET name = $1 , email = $2 , age = $3 where id = $4 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`

export const getById = `SELECT "mostReferencedCustomer".*,"totalPayments".*,"customerCount".*,"tripCount".*,"user".* FROM 
"get_most_referenced_customer_name"() as "mostReferencedCustomer",
"get_total_payments"() as "totalPayments",
"count_customer"() as "customerCount",
"get_trip_count"() as "tripCount",
"Users" as "user" where id = $1`