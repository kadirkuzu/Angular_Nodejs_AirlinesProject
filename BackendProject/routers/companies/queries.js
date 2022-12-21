let name = `Companies`

export let getAll = `SELECT * FROM "${name}" ORDER BY id ASC`
export let getById = `SELECT * FROM "${name}" WHERE id = $1`
export let add = `INSERT INTO "${name}" (name,country,city,"contactName","contactNumber") VALUES ($1,$2,$3,$4,$5) RETURNING *`
export let update = `UPDATE "${name}" SET name = $1 , code = $2 , city = $3 , country = $4 where id = $5 RETURNING *`
export let deleteOne = `DELETE FROM "${name}" WHERE id = $1 RETURNING *`
export let checkCompanyExist = `SELECT s FROM "${name}" s WHERE s."contactName" = $1`

export function changeName(companyName){
    name=companyName
    getAll = `SELECT * FROM "${name}" ORDER BY id ASC`
    getById = `SELECT * FROM "${name}" WHERE id = $1`
    add = `INSERT INTO "${name}" (name,country,city,"contactName","contactNumber") VALUES ($1,$2,$3,$4,$5) RETURNING *`
    update = `UPDATE "${name}" SET name = $1 , code = $2 , city = $3 , country = $4 where id = $5 RETURNING *`
    deleteOne = `DELETE FROM "${name}" WHERE id = $1 RETURNING *`
    checkCompanyExist = `SELECT s FROM "${name}" s WHERE s."contactName" = $1 or s."contactNumber" = $2 `
}
