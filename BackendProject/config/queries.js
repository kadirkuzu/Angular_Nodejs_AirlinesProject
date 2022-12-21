export let createDatase = `CREATE DATABASE "AirliensDatabase"`
export let createTables = 
`
CREATE EXTENSION pgcrypto;

--COMPANIES
CREATE TABLE "Companies"
(
	name VARCHAR(50) NOT NULL,
	country VARCHAR(3) DEFAULT 'TUR', --convert inputs to upper with func
	city VARCHAR(50) DEFAULT 'Istanbul',
	"contactName" VARCHAR(50),
	"contactNumber" VARCHAR(12)
);

CREATE TABLE "Manufacturers"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Companies");

CREATE TABLE "PlaneOwners"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Companies");

CREATE TABLE "AirportManagements"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Companies");

CREATE TABLE "GroundServices"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Companies");


--AIRCRAFTS

CREATE TABLE "AircraftModels"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"manufacturerId" INT NOT NULL,
	"modelName" VARCHAR(50) UNIQUE,
	capacity INT,
	CONSTRAINT fk_manufacturer FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturers"(id)
);


CREATE TABLE "Aircrafts"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"ownerId" INT NOT NULL,
	"modelId" INT NOT NULL,
	"aircraftName" VARCHAR(50) NOT NULL,
	"yearBought" int DEFAULT 2000,
	check("yearBought" >= 1800 and "yearBought" <= 2100),
	CONSTRAINT fk_owner FOREIGN KEY ("ownerId") REFERENCES "PlaneOwners"(id),
	CONSTRAINT fk_model FOREIGN KEY ("modelId") REFERENCES "AircraftModels"(id)
);



-- PERSON

CREATE TABLE "Persons"
(
	name VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	nationality VARCHAR(3) NOT NULL,
	dob DATE NOT NULL,
	email VARCHAR(50) NOT NULL
);

CREATE TABLE "Customers"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"customerRank" INT NOT NULL DEFAULT 0,
	check("customerRank" >= 0 and "customerRank" <= 10)
) INHERITS ("Persons");

CREATE TABLE "Users"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	password TEXT NOT NULL
) INHERITS ("Persons");


CREATE TABLE "Employees"
(
	salary INT NOT NULL
) INHERITS ("Persons");

CREATE TABLE "Pilots"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"yearStarted" INT NOT NULL,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employees");

CREATE TABLE "CabinCrews"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"pilotId" INT NOT NULL,
	CONSTRAINT fk_pilot FOREIGN KEY ("pilotId") REFERENCES "Pilots"(id)
);

CREATE TABLE "CabinPersonels"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"crewId" INT NOT NULL,
	CONSTRAINT fk_crewId FOREIGN KEY ("crewId") REFERENCES "CabinCrews"(id)
	
) INHERITS ("Employees");



CREATE TABLE "GroundServicesChiefs"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"yearStarted" INT NOT NULL,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employees");

CREATE TABLE "GroundServicesCrews"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"gsCheifId" INT NOT NULL,
	CONSTRAINT fk_chief FOREIGN KEY ("gsCheifId") REFERENCES "GroundServicesChiefs"(id)
);

CREATE TABLE "GroundServicesPersonels"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"crewId" INT NOT NULL,
	CONSTRAINT fk_crewId FOREIGN KEY ("crewId") REFERENCES "GroundServicesCrews"(id)
) INHERITS ("Employees");





--AIRPORT

CREATE TABLE "Airports"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"airportManagementId" INT NOT NULL,
	name VARCHAR(50) NOT NULL UNIQUE,
	code VARCHAR(50) NOT NULL UNIQUE,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(3) NOT NULL,
	"planeCapacity" INT NOT NULL,
	"yearBuilt" INT DEFAULT 2000,
	check("yearBuilt" >= 1800 and "yearBuilt" <= 2100),
	check("planeCapacity" >= 0 ),
	CONSTRAINT fk_AirportManagement_id FOREIGN KEY ("airportManagementId") REFERENCES "AirportManagements"(id)
);


CREATE TABLE "Routes"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"startingAirportId" INT NOT NULL,
	"finalAirportId" INT NOT NULL,
	check("startingAirportId" != "finalAirportId"),
	UNIQUE ("startingAirportId", "finalAirportId"),
	CONSTRAINT fk_starting_airport_id FOREIGN KEY ("startingAirportId") REFERENCES "Airports"(id),
	CONSTRAINT fk_final_airport_id FOREIGN KEY ("finalAirportId") REFERENCES "Airports"(id)
);


CREATE TABLE "Flights"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"aircraftId" INT NOT NULL,
	"CCrewId" INT NOT NULL,
	"GSCrewId" INT NOT NULL,
	"routeId" INT NOT NULL,
	"flightDate" DATE NOT NULL DEFAULT CURRENT_DATE,
	UNIQUE("aircraftId","CCrewId","GSCrewId","routeId","flightDate"),
	CONSTRAINT fk_aircraft FOREIGN KEY ("aircraftId") REFERENCES "Aircrafts"(id),
	CONSTRAINT fk_CCrew FOREIGN KEY ("CCrewId") REFERENCES "CabinCrews"(id),
	CONSTRAINT fk_GSCre FOREIGN KEY ("GSCrewId") REFERENCES "GroundServicesCrews"(id),
	CONSTRAINT fk_route FOREIGN KEY ("routeId") REFERENCES "Routes"(id)
);


--ORDER

CREATE TABLE "Payments"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	amount INT NOT NULL,
	"paymentType" VARCHAR(4) NOT NULL,
	check("paymentType" = 'CASH' OR "paymentType" = 'CARD'),
	"pointsEarned" INT NOT NULL DEFAULT 0
);

CREATE TABLE "Trips"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"flightId" INT NOT NULL,
	"customerId" INT NOT NULL,
	"paymentId" INT NOT NULL,
	"tripRating" INT NOT NULL,
	check("tripRating" >= 0 and "tripRating" <= 5),
	CONSTRAINT fk_flight FOREIGN KEY ("flightId") REFERENCES "Flights"(id),
	CONSTRAINT fk_customer FOREIGN KEY ("customerId") REFERENCES "Customers"(id),
	CONSTRAINT fk_payment FOREIGN KEY ("paymentId") REFERENCES "Payments"(id)
	
);



`