export let createDatase = "CREATE DATABASE airliensdatabase"
export let createTables = 
`
CREATE EXTENSION pgcrypto;

--COMPANIES
CREATE TABLE Company
(
	company_name VARCHAR(50) NOT NULL,
	country VARCHAR(3) DEFAULT 'TUR', --convert inputs to upper with func
	city VARCHAR(50) DEFAULT 'Istanbul',
	contact_name VARCHAR(50),
	contact_number VARCHAR(12)
	
);

CREATE TABLE Manifacturer
(
	manifacturer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS (Company);

CREATE TABLE PlaneOwner
(
	PlaneOwner_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS (Company);

CREATE TABLE AirportManagement
(
	AirportManagement_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS (Company);

CREATE TABLE GroundServices
(
	GroundServices_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS (Company);


--PLANE STUFF

CREATE TABLE PlaneModel
(
	model_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	manifacturer_id INT NOT NULL,
	model_name VARCHAR(50) UNIQUE,
	capacity INT,
	CONSTRAINT fk_manifacturer FOREIGN KEY (manifacturer_id) REFERENCES Manifacturer(manifacturer_id)
);


CREATE TABLE Plane
(
	plane_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	owner_id INT NOT NULL,
	model_id INT NOT NULL,
	plane_name VARCHAR(50) NOT NULL,
	year_bought int DEFAULT 2000,
	check(year_bought >= 1800 and year_bought <= 2100),
	CONSTRAINT fk_owner FOREIGN KEY (owner_id) REFERENCES PlaneOwner(PlaneOwner_id),
	CONSTRAINT fk_model FOREIGN KEY (model_id) REFERENCES PlaneModel(model_id)
);



-- PERSON

CREATE TABLE Person
(
	person_name VARCHAR(50) NOT NULL,
	person_phone VARCHAR(50) NOT NULL,
	person_nationality VARCHAR(3) NOT NULL,
	person_birthyear INT NOT NULL,
	check(person_birthyear >= 1700 and person_birthyear <= 2100)
);

CREATE TABLE Customer
(
	customer_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	customer_rank INT NOT NULL DEFAULT 0,
	check(customer_rank >= 0 and customer_rank <= 10)
) INHERITS (Person);


CREATE TABLE Employee
(
	salary INT NOT NULL
) INHERITS (Person);

CREATE TABLE Pilot
(
	pilot_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	year_started INT NOT NULL,
	check(year_started >= 1800 and year_started <= 2100)
) INHERITS (Employee);

CREATE TABLE CabinPersonel
(
	cabinpersonel_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
	
) INHERITS (Employee);

CREATE TABLE CabinCrew
(
	CCrew_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	pilot_id INT NOT NULL,
	CONSTRAINT fk_pilot FOREIGN KEY (pilot_id) REFERENCES Pilot(pilot_id)
);

CREATE TABLE CabinCrewPersonel
(
	CCrew_id INT NOT NULL,
	cabinpersonel_id INT NOT NULL,
	PRIMARY KEY(CCrew_id, cabinpersonel_id),
	CONSTRAINT fk_CCrew FOREIGN KEY (CCrew_id) REFERENCES CabinCrew(CCrew_id),
	CONSTRAINT fk_cabinpersonel FOREIGN KEY (cabinpersonel_id) REFERENCES CabinPersonel(cabinpersonel_id)
);


CREATE TABLE GroundServicesChief
(
	GSChief_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	year_started INT NOT NULL,
	check(year_started >= 1800 and year_started <= 2100)
) INHERITS (Employee);

CREATE TABLE GroundServicesPersonel
(
	GSPersonel_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY
) INHERITS (Employee);

CREATE TABLE GroundServicesCrew
(
	GSCrew_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	GSChief_id INT NOT NULL,
	CONSTRAINT fk_chief FOREIGN KEY (GSChief_id) REFERENCES GroundServicesChief(GSChief_id)
);

CREATE TABLE GroundServicesCrewPersonel
(
	GSCrew_id INT NOT NULL,
	GSPersonel_id INT NOT NULL,
	PRIMARY KEY(GSCrew_id, GSPersonel_id),
	CONSTRAINT fk_GSCrew FOREIGN KEY (GSCrew_id) REFERENCES GroundServicesCrew(GSCrew_id),
	CONSTRAINT fk_GSCPersonel FOREIGN KEY (GSPersonel_id) REFERENCES GroundServicesPersonel(GSPersonel_id)
);



--AIRPORT

CREATE TABLE Airport
(
	airport_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	AirportManagement_id INT NOT NULL,
	airport_name VARCHAR(50) NOT NULL UNIQUE,
	city VARCHAR(50) NOT NULL,
	country VARCHAR(3) NOT NULL,
	plane_capacity INT NOT NULL,
	year_built INT DEFAULT 2000,
	check(year_built >= 1800 and year_built <= 2100),
	check(plane_capacity >= 0 ),
	CONSTRAINT fk_AirportManagement_id FOREIGN KEY (AirportManagement_id) REFERENCES AirportManagement(AirportManagement_id)
);


CREATE TABLE Route
(
	route_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	starting_airport_id INT NOT NULL,
	final_airport_id INT NOT NULL,
	check(starting_airport_id != final_airport_id),
	UNIQUE (starting_airport_id, final_airport_id),
	CONSTRAINT fk_starting_airport_id FOREIGN KEY (starting_airport_id) REFERENCES AirporT(airport_id),
	CONSTRAINT fk_final_airport_id FOREIGN KEY (final_airport_id) REFERENCES AirporT(airport_id)
);


CREATE TABLE Flight
(
	flight_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	plane_id INT NOT NULL,
	CCrew_id INT NOT NULL,
	GSCrew_id INT NOT NULL,
	route_id INT NOT NULL,
	flight_date DATE NOT NULL DEFAULT CURRENT_DATE,
	UNIQUE(plane_id,CCrew_id,GSCrew_id,route_id,flight_date),
	CONSTRAINT fk_plane FOREIGN KEY (plane_id) REFERENCES Plane(plane_id),
	CONSTRAINT fk_CCrew FOREIGN KEY (CCrew_id) REFERENCES CabinCrew(CCrew_id),
	CONSTRAINT fk_GSCre FOREIGN KEY (GSCrew_id) REFERENCES GroundServicesCrew(GSCrew_id),
	CONSTRAINT fk_route FOREIGN KEY (route_id) REFERENCES Route(route_id)
);


--ORDER

CREATE TABLE Payment
(
	payment_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	amount INT NOT NULL,
	payment_type VARCHAR(4) NOT NULL,
	check(payment_type = 'CASH' OR payment_type = 'CARD'),
	points_earned INT NOT NULL DEFAULT 0
);

CREATE TABLE Trip
(
	trip_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	flight_id INT NOT NULL,
	customer_id INT NOT NULL,
	payment_id INT NOT NULL,
	trip_rating INT NOT NULL,
	check(trip_rating >= 0 and trip_rating <= 5),
	CONSTRAINT fk_fligt FOREIGN KEY (flight_id) REFERENCES Flight(flight_id),
	CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
	CONSTRAINT fk_payment FOREIGN KEY (payment_id) REFERENCES Payment(payment_id)
	
);



`