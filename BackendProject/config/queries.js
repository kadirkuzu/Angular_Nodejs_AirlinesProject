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

CREATE TABLE "Manufacturer"
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


--PLANE STUFF

CREATE TABLE "PlaneModels"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"manufacturerId" INT NOT NULL,
	"modelName" VARCHAR(50) UNIQUE,
	capacity INT,
	CONSTRAINT fk_manufacturer FOREIGN KEY ("manufacturerId") REFERENCES "Manufacturer"(id)
);


CREATE TABLE "Planes"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"ownerId" INT NOT NULL,
	"modelId" INT NOT NULL,
	"planeName" VARCHAR(50) NOT NULL,
	"yearBought" int DEFAULT 2000,
	check("yearBought" >= 1800 and "yearBought" <= 2100),
	CONSTRAINT fk_owner FOREIGN KEY ("ownerId") REFERENCES "PlaneOwners"(id),
	CONSTRAINT fk_model FOREIGN KEY ("modelId") REFERENCES "PlaneModels"(id)
);



-- PERSON

CREATE TABLE "Persons"
(
	name VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	nationality VARCHAR(3) NOT NULL,
	dob INT NOT NULL,
	check(dob >= 1700 and dob <= 2100)
);

CREATE TABLE "Customers"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"customerRank" INT NOT NULL DEFAULT 0,
	check("customerRank" >= 0 and "customerRank" <= 10)
) INHERITS ("Persons");

CREATE TABLE "Brokers"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	password VARCHAR(50) NOT NULL
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

CREATE TABLE "CabinPersonels"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
	
) INHERITS ("Employees");

CREATE TABLE "CabinCrews"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"pilotId" INT NOT NULL,
	CONSTRAINT fk_pilot FOREIGN KEY ("pilotId") REFERENCES "Pilots"(id)
);

CREATE TABLE "CabinCrewPersonels"
(
	"ccrewId" INT NOT NULL,
	"cabinPersonelId" INT NOT NULL,
	PRIMARY KEY("ccrewId", "cabinPersonelId"),
	CONSTRAINT "fk_CCrew" FOREIGN KEY ("ccrewId") REFERENCES "CabinCrews"(id),
	CONSTRAINT fk_cabinpersonel FOREIGN KEY ("cabinPersonelId") REFERENCES "CabinPersonels"(id)
);


CREATE TABLE "GroundServicesChiefs"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"yearStarted" INT NOT NULL,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employees");

CREATE TABLE "GroundServicesPersonels"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Employees");

CREATE TABLE "GroundServicesCrews"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"gsCheifId" INT NOT NULL,
	CONSTRAINT fk_chief FOREIGN KEY ("gsCheifId") REFERENCES "GroundServicesChiefs"(id)
);

CREATE TABLE "GroundServicesCrewPersonels"
(
	"gsCrewId" INT NOT NULL,
	"gsPersonelId" INT NOT NULL,
	PRIMARY KEY("gsCrewId", "gsPersonelId"),
	CONSTRAINT fk_GSCrew FOREIGN KEY ("gsCrewId") REFERENCES "GroundServicesCrews"(id),
	CONSTRAINT fk_GSCPersonel FOREIGN KEY ("gsPersonelId") REFERENCES "GroundServicesPersonels"(id)
);



--AIRPORT

CREATE TABLE "Airports"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"AirportManagementId" INT NOT NULL,
	name VARCHAR(50) NOT NULL UNIQUE,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(3) NOT NULL,
	"planeCapacity" INT NOT NULL,
	"yearBuilt" INT DEFAULT 2000,
	check("yearBuilt" >= 1800 and "yearBuilt" <= 2100),
	check("planeCapacity" >= 0 ),
	CONSTRAINT fk_AirportManagement_id FOREIGN KEY ("AirportManagementId") REFERENCES "AirportManagements"(id)
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
	"planeId" INT NOT NULL,
	"CCrewId" INT NOT NULL,
	"GSCrewId" INT NOT NULL,
	"routeId" INT NOT NULL,
	"flightDate" DATE NOT NULL DEFAULT CURRENT_DATE,
	UNIQUE("planeId","CCrewId","GSCrewId","routeId","flightDate"),
	CONSTRAINT fk_plane FOREIGN KEY ("planeId") REFERENCES "Planes"(id),
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