let name = `"Routes"`
let airports = `"Airports"`
export const getAll = `SELECT ${name}."id",${name}."departureAirportId",${name}."arrivalAirportId",${name}."flightTime",a1.name as "departureAirportName",a1."code" as "departureAirportCode",a2.name as "arrivalAirportName",a2."code" as "arrivalAirportCode" FROM ${name}
 INNER JOIN ${airports} as a1 ON ${name}."departureAirportId" = a1.id
 INNER JOIN ${airports} as a2 ON ${name}."arrivalAirportId"=a2.id`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const add = `INSERT INTO ${name} ("departureAirportId","arrivalAirportId","flightTime") VALUES ($1,$2,$3) RETURNING *`
export const update = `UPDATE ${name} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`
export const checkRouteExist = `SELECT * FROM ${name} s WHERE "departureAirportId" = $1 AND "arrivalAirportId" = $2`
