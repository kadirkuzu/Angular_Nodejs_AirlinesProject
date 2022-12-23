let name = `"Flights"`
export const getAll = `SELECT ${name}."id",${name}."aircraftId",${name}."CCrewId",${name}."GSCrewId",${name}."routeId",${name}."flightDate",
t1.name as "cabinCrewName",t2.name as "groundServiceCrewName",t3."aircraftName" as "aircraftName",t4."departureAirportId" as "departureAirportId",t4."arrivalAirportId" as "arrivalAirportId" FROM ${name}
 INNER JOIN "CabinCrews" as t1 ON ${name}."CCrewId" = t1.id
 INNER JOIN "GroundServicesCrews" as t2 ON ${name}."GSCrewId"=t2.id
 INNER JOIN "Aircrafts" as t3 ON ${name}."aircraftId"=t3.id
 INNER JOIN "Routes" as t4 ON ${name}."routeId"=t4.id`
export const getById = `SELECT * FROM ${name} WHERE id = $1`
export const add = `INSERT INTO ${name} ("CCrewId","GSCrewId","aircraftId","flightDate","routeId") VALUES ($1,$2,$3,$4,$5) RETURNING *`
export const update = `UPDATE ${name} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`
export const deleteOne = `DELETE FROM ${name} WHERE id = $1 RETURNING *`
export const checkFlightExist = `SELECT * FROM ${name} s WHERE "CCrewId" = $1 AND "GSCrewId" = $2 AND "aircraftId" = $3 AND "flightDate" = $4 AND "routeId" = $5`
