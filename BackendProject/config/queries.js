export let createDatase = `CREATE DATABASE "AirliensDatabase"`
export let createTables = 
`
CREATE EXTENSION pgcrypto;

--COMPANIES
CREATE TABLE "Company"
(
	name VARCHAR(50) NOT NULL,
	country VARCHAR(3) DEFAULT 'TUR', --convert inputs to upper with func
	city VARCHAR(50) DEFAULT 'Istanbul',
	"contactName" VARCHAR(50),
	"contactNumber" VARCHAR(12)
	
);

CREATE TABLE "Manifacturer"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Company");

CREATE TABLE "PlaneOwner"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Company");

CREATE TABLE "AirportManagement"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Company");

CREATE TABLE "GroundServices"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Company");


--PLANE STUFF

CREATE TABLE "PlaneModel"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"manifacturerId" INT NOT NULL,
	"modelName" VARCHAR(50) UNIQUE,
	capacity INT,
	CONSTRAINT fk_manifacturer FOREIGN KEY ("manifacturerId") REFERENCES "Manifacturer"(id)
);


CREATE TABLE "Plane"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"ownerId" INT NOT NULL,
	"modelId" INT NOT NULL,
	"planeName" VARCHAR(50) NOT NULL,
	"yearBought" int DEFAULT 2000,
	check("yearBought" >= 1800 and "yearBought" <= 2100),
	CONSTRAINT fk_owner FOREIGN KEY ("ownerId") REFERENCES "PlaneOwner"(id),
	CONSTRAINT fk_model FOREIGN KEY ("modelId") REFERENCES "PlaneModel"(id)
);



-- PERSON

CREATE TABLE "Person"
(
	name VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	nationality VARCHAR(3) NOT NULL,
	dob INT NOT NULL,
	check(dob >= 1700 and dob <= 2100)
);

CREATE TABLE "Customer"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"customerRank" INT NOT NULL DEFAULT 0,
	check("customerRank" >= 0 and "customerRank" <= 10)
) INHERITS ("Person");


CREATE TABLE "Employee"
(
	salary INT NOT NULL,
	password VARCHAR(50) NOT NULL
) INHERITS ("Person");

CREATE TABLE "Pilot"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"yearStarted" INT NOT NULL,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employee");

CREATE TABLE "CabinPersonel"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
	
) INHERITS ("Employee");

CREATE TABLE "CabinCrew"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"pilotId" INT NOT NULL,
	CONSTRAINT fk_pilot FOREIGN KEY ("pilotId") REFERENCES "Pilot"(id)
);

CREATE TABLE "CabinCrewPersonel"
(
	"ccrewId" INT NOT NULL,
	"cabinPersonelId" INT NOT NULL,
	PRIMARY KEY("ccrewId", "cabinPersonelId"),
	CONSTRAINT "fk_CCrew" FOREIGN KEY ("ccrewId") REFERENCES "CabinCrew"(id),
	CONSTRAINT fk_cabinpersonel FOREIGN KEY ("cabinPersonelId") REFERENCES "CabinPersonel"(id)
);


CREATE TABLE "GroundServicesChief"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"yearStarted" INT NOT NULL,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employee");

CREATE TABLE "GroundServicesPersonel"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS ("Employee");

CREATE TABLE "GroundServicesCrew"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"gsCheifId" INT NOT NULL,
	CONSTRAINT fk_chief FOREIGN KEY ("gsCheifId") REFERENCES "GroundServicesChief"(id)
);

CREATE TABLE "GroundServicesCrewPersonel"
(
	"gsCrewId" INT NOT NULL,
	"gsPersonelId" INT NOT NULL,
	PRIMARY KEY("gsCrewId", "gsPersonelId"),
	CONSTRAINT fk_GSCrew FOREIGN KEY ("gsCrewId") REFERENCES "GroundServicesCrew"(id),
	CONSTRAINT fk_GSCPersonel FOREIGN KEY ("gsPersonelId") REFERENCES "GroundServicesPersonel"(id)
);



--AIRPORT

CREATE TABLE "Airport"
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
	CONSTRAINT fk_AirportManagement_id FOREIGN KEY ("AirportManagementId") REFERENCES "AirportManagement"(id)
);


CREATE TABLE "Route"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"startingAirportId" INT NOT NULL,
	"finalAirportId" INT NOT NULL,
	check("startingAirportId" != "finalAirportId"),
	UNIQUE ("startingAirportId", "finalAirportId"),
	CONSTRAINT fk_starting_airport_id FOREIGN KEY ("startingAirportId") REFERENCES "Airport"(id),
	CONSTRAINT fk_final_airport_id FOREIGN KEY ("finalAirportId") REFERENCES "Airport"(id)
);


CREATE TABLE "Flight"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"planeId" INT NOT NULL,
	"CCrewId" INT NOT NULL,
	"GSCrewId" INT NOT NULL,
	"routeId" INT NOT NULL,
	"flightDate" DATE NOT NULL DEFAULT CURRENT_DATE,
	UNIQUE("planeId","CCrewId","GSCrewId","routeId","flightDate"),
	CONSTRAINT fk_plane FOREIGN KEY ("planeId") REFERENCES "Plane"(id),
	CONSTRAINT fk_CCrew FOREIGN KEY ("CCrewId") REFERENCES "CabinCrew"(id),
	CONSTRAINT fk_GSCre FOREIGN KEY ("GSCrewId") REFERENCES "GroundServicesCrew"(id),
	CONSTRAINT fk_route FOREIGN KEY ("routeId") REFERENCES "Route"(id)
);


--ORDER

CREATE TABLE "Payment"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	amount INT NOT NULL,
	"paymentType" VARCHAR(4) NOT NULL,
	check("paymentType" = 'CASH' OR "paymentType" = 'CARD'),
	"pointsEarned" INT NOT NULL DEFAULT 0
);

CREATE TABLE "Trip"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"flightId" INT NOT NULL,
	"customerId" INT NOT NULL,
	"paymentId" INT NOT NULL,
	"tripRating" INT NOT NULL,
	check("tripRating" >= 0 and "tripRating" <= 5),
	CONSTRAINT fk_fligt FOREIGN KEY ("flightId") REFERENCES "Flight"(id),
	CONSTRAINT fk_customer FOREIGN KEY ("customerId") REFERENCES "Customer"(id),
	CONSTRAINT fk_payment FOREIGN KEY ("paymentId") REFERENCES "Payment"(id)
	
);



`