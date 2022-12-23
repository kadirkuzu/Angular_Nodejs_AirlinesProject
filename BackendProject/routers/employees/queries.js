let employees = `"Employees"`
let pilots = `"Pilots"`
let groundServiceChiefs = `"GroundServicesChiefs"`
let groundServicePersonels = `"GroundServicesPersonels"`
let cabinPersonels = `"CabinPersonels"`
let cabinCrews = `"CabinCrews"`
let groundServiceCrews = `"GroundServicesCrews"`

export const getPilots = `SELECT * FROM ${pilots} ORDER BY id ASC`
export const getGroundServiceChiefs = `SELECT * FROM ${groundServiceChiefs} ORDER BY id ASC`
export const getGroundServicePersonels = `SELECT * FROM ${groundServicePersonels} ORDER BY id ASC`
export const getGroundServicePersonelsWithCrewId = `SELECT * FROM ${groundServicePersonels} WHERE "crewId" = $1  ORDER BY id ASC`
export const getCabinPersonels = `SELECT * FROM ${cabinPersonels} ORDER BY id ASC`
export const getCabinPersonelsWithCrewId = `SELECT * FROM ${cabinPersonels} WHERE "crewId" = $1 ORDER BY id ASC`
export const getCabinCrews = `SELECT ${cabinCrews}.id,${cabinCrews}."pilotId",${cabinCrews}."name",${pilots}.name as "pilotName" FROM ${cabinCrews}
 INNER JOIN ${pilots} ON ${cabinCrews}."pilotId"=${pilots}.id`

export const getGroundServiceCrews = `SELECT ${groundServiceCrews}.id,${groundServiceCrews}."gsCheifId",${groundServiceCrews}."name",${groundServiceChiefs}.name as "chiefName" FROM ${groundServiceCrews}
 INNER JOIN ${groundServiceChiefs} ON ${groundServiceCrews}."gsCheifId"=${groundServiceChiefs}.id`

export const addPilot = `INSERT INTO ${pilots} ("yearStarted",email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addGroundServiceChief = `INSERT INTO ${groundServiceChiefs} ("yearStarted",email,dob,name,phone,nationality,salary) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addGroundServicePersonel = `INSERT INTO ${groundServicePersonels} (email,dob,name,phone,nationality,salary,"crewId") VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addCabinPersonel = `INSERT INTO ${cabinPersonels} (email,dob,name,phone,nationality,salary,"crewId") VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`
export const addCabinCrew = `INSERT INTO ${cabinCrews} (name,"pilotId") VALUES ($1,$2) RETURNING *`
export const addGroundServiceCrew = `INSERT INTO ${groundServiceCrews} (name,"gsCheifId") VALUES ($1,$2) RETURNING *`

export const update = `UPDATE ${pilots} SET name = $1 , code = $2 , city = $3 , country = $4,"planeCapacity" = $5, "yearBuilt" = $6 , "airportManagementId" = $7 where id = $8 RETURNING *`

export const deleteOne = `DELETE FROM ${pilots} WHERE id = $1 RETURNING *`

export const checkEmployeeExist = `SELECT s FROM ${employees} s WHERE s.email = $1 or s.phone = $2`

export const checkCabinCrewExist = `SELECT s FROM ${cabinCrews} s WHERE s.name = $1`
export const checkGroundServiceCrewExist = `SELECT s FROM ${groundServiceCrews} s WHERE s.name = $1`
