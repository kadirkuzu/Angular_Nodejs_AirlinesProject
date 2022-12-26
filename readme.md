
# Veritabanı Yönetim Sistemleri Projesi

SAU 2022-23 Güz dönemi Veri Tabanı Yönetim Sitemleri dersi Projesi.

## Proje Konusu

Özel uçak sahibi şirketlerin uçuşlarına yolcu kabul etmesini sağlayan bir uygulama be bu uygulamaya ait veritabanı.

## İş Kuralları
* Bir AircraftModel in 1 tane Manifacturer i vardır, bir Manifacturer birden fazla AircraftModel e sahip olabilir
* Bir AircraftModel; id, manifacturer_id, name, capacity e sahiptir.
* AircraftModel in name i benzersizdir.
* Bir Aircraft in 1 tane AircraftModel i vardır, bir AircraftModel birden fazla Aircraft e sahip olabilir
* Bir Aircraft; id, owner_id, model_id, name, year_bought
* Bir Aircraft in 1 tane PlaneOwner i vardır, bir PlaneOwner birden fazla Plane e sahip olabilir
* bir Person; name, phone, nationality, birthyear e sahiptir.
* Person in birthyear i 1700-2100 arasi olmalidir.
* Customer Person dan inherit alir.
* bir Customer; id, rank e sahiptir.
* Customer in rank i 0-10 arasi olmalidir.
* User Person dan inherit alir.
* bir User; id, password e sahiptir.
* Employee Person dan inherit alir.
* Employee, salary e sahiptir.
* Pilot Employee den inherit alir.
* Pilot, id, year_started, crewCount a sahiptir.
* Pilot year_started i 1800-2100 arasi olmalidir.
* CabinPersonel Employee den iherit alir.
* CabinPersonel, id, CabinCrewId ye sahiptir.
* GroundServicesChief Employee den inherit alir.
* GroundServicesChief, id, year_started,crewCount e sahiptir.
* GroundServicesChief year_started i 1800-2100 arasi olmalidir.
* GroundServicesPersonel Employee den iherit alir.
* GroundServicesPersonel, id, GroundServicesId ye sahiptir.
* GroundServicesCrew 1 tane GroundServicesChief e ve 1 den fazla GroundServicesPersonel e sahiptir, GroundServicesChief 1 den fazla ve GroundServicesPersonel ise 1 tane GroundServicesCrew e sahip olabilir.
* GroundServicesCrew; id, chief_id e sahiptir.
* CabinCrew 1 tane Pilot e ve 1 den fazla CabinPersonel e sahiptir, Pilot 1 den fazla CabinPersonel ise 1 tane CabinCrew e sahip olabilir.
* CabinCrew; id, pilot_id e sahiptir
* Bir Airport in 1 tane AirportManager i vardır, bir AirportManager birden fazla Airport e sahip olabilir.
* Bir Airport; id management_id, name, city, country, capacity, year_built e sahiptir.
* Airport year_built i 1800-2100 arasi olmalidir.
* Airport capacity 0'a esit ve 0'dan buyuk olmalidir.
* Bir Route in 2 tane birbirinden farkli Airport u vardir, bir Airport un birden fazla Route i olabilir.
* Bir Route; id, startingAirport_id, finalAirport_id, flightTİME e sahiptir.
* Bir Flight 1 tane Plane, CabinCrew, GroundServicesCrew, Route sahibidir, bir Plane, CabinCrew, GroundServicesCrew, Route 1 den fazla Flight sahibi olabilir.
* Bir Flight; id, plane_id, cabincrew_id, groundservicescrew_id, route_id, flight_date e sahiptir.
* 2 tane birbirinin aynisi Flight olamaz.
* Bir Trip 1 tane Flight, Customer, Payment sahibidir, bir Flight, Customer, Payment 1 den fazla Trip e sahip olabilir.
* Bir Trip; id, flight_id, customer_id, paymentAmount, trip_rating e sahiptir.
* Trip trip_rating 0-5 arasi olmalidir.
* Persons dan inherit alan tablolara insert edilirken nationality girdileri trigger ile büyük harfe çevrilir.
* Trips e eklenen müşterinin rankı trigger ile artar.
* CabinCrews e crew eklenirken eklenen pilotun crewCount u trigger ile artar.
* GroundServicesCrew e crew eklenirken eklenen GroundServicesChief in crewCount u trigger ile artar.


## İlişkisel Şema

* Companies(name: string, country: string, city: string, contactName: string)
* Manifacturers(**id: int**, name: string, country: string, city: string, contactName: string)
* PlaneOwners(**id: int**, name: string, country: string, city: string, contactName: string)
* AirportManagements(**id: int**, name: string, country: string, city: string, contactName: string)

* AircraftModels(**id: int**, **manifacturerId: int**, modelName: string, capacity: int)
* Aircrafts(**id: int**, **ownerId: int**, **modelId: int**, aircraftName: string, yearBought: int)

* Persons(name: string, phone: string, nationality: string, dob: date, email: string)
* Customers(**id: int**, customerRank: int, name: string, phone: string, nationality: string, dob: date, email: string)
* Users(**id: int**, password: string, name: string, phone: string, nationality: string, dob: date, email: string)
* Employees(salary: int, name: string, phone: string, nationality: string, dob: date, email: string)
* Pilots(**id: int**, yearStarted: int, crewCount: int, salary: int, name: string, phone: string, nationality: string, dob: date, email: string)
* GroundServicesChief(**id: int**, yearStarted: int, crewCount: int, salary: int, name: string, phone: string, nationality: string, dob: date, email: string)
* CabinCrews(**id: int**, **pilotId: int**, name: string)
* GroundServicesCrews(**id: int**, **GSChiefId: int**, name: string)
* CabinPersonels(**id: int**, **CCrewId: int**, salary: int, name: string, phone: string, nationality: string, dob: date, email: string)
* GroundServicesPersonels(**id: int**, **GSCrewId: int**, salary: int, name: string, phone: string, nationality: string, dob: date, email: string)

* Airports(**id: int**, **AirportManagementId: int**, name: string, code: string, city: string, country: string, planeCapacity: int, yearBuilt: int)
* Routes(**id int**, **departureId: int**, **arrivalId: int**, flightTime: int)
* Flights(**id: int**, **aircraftId: int**, **CCrewId: int**, **routeId: int**, flightDate: date)
* Trips(**id: int**, **flightId: int**, **customerId: int**, tripRating: int, amount: int)
## Crows Foot

![App Screenshot](https://i.hizliresim.com/k2ofg68.png)


## Database oluşturma kodu

```sql

CREATE DATABASE "AirliensDatabase"

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
	"crewCount" INT NOT NULL DEFAULT 0,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employees");
CREATE TABLE "CabinCrews"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"pilotId" INT NOT NULL,
	name TEXT NOT NULL,
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
	"crewCount" INT NOT NULL DEFAULT 0,
	check("yearStarted" >= 1800 and "yearStarted" <= 2100)
) INHERITS ("Employees");
CREATE TABLE "GroundServicesCrews"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"gsCheifId" INT NOT NULL,
	name TEXT NOT NULL,
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
	"departureAirportId" INT NOT NULL,
	"arrivalAirportId" INT NOT NULL,
	"flightTime" INT NOT NULL,
	check("departureAirportId" != "arrivalAirportId"),
	UNIQUE ("departureAirportId", "arrivalAirportId"),
	CONSTRAINT fk_starting_airport_id FOREIGN KEY ("departureAirportId") REFERENCES "Airports"(id),
	CONSTRAINT fk_final_airport_id FOREIGN KEY ("arrivalAirportId") REFERENCES "Airports"(id)
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
CREATE TABLE "Trips"
(
	id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
	"flightId" INT NOT NULL,
	"customerId" INT NOT NULL,
	"tripRating" INT NOT NULL,
	amount INT NOT NULL,
	check(amount > 0),
	check("tripRating" >= 0 and "tripRating" <= 5),
	CONSTRAINT fk_flight FOREIGN KEY ("flightId") REFERENCES "Flights"(id),
	CONSTRAINT fk_customer FOREIGN KEY ("customerId") REFERENCES "Customers"(id)
	
);
--TRIGGERS
CREATE OR REPLACE FUNCTION "increase_customer_rank"()
RETURNS TRIGGER 
AS
$$
BEGIN
	UPDATE "Customers"
	SET "customerRank" = "customerRank" + 1
	WHERE id = NEW."customerId";
	RETURN NULL;
END;
$$
LANGUAGE "plpgsql";
CREATE OR REPLACE TRIGGER "increase_customer_rank"
AFTER INSERT ON "Trips"
FOR EACH ROW
EXECUTE PROCEDURE "increase_customer_rank"();
CREATE OR REPLACE FUNCTION "capitalize_country"()
RETURNS TRIGGER AS $$
BEGIN
    NEW.nationality = UPPER(NEW.nationality);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "capitalize_country_pilots"
BEFORE INSERT ON "Pilots"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_customers"
BEFORE INSERT ON "Customers"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_cabinpersonels"
BEFORE INSERT ON "CabinPersonels"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_gsChiefs"
BEFORE INSERT ON "GroundServicesChiefs"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_gsPersonels"
BEFORE INSERT ON "GroundServicesPersonels"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE FUNCTION "increase_chief_crew_count"()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "GroundServicesChiefs" SET "crewCount" = "crewCount" + 1 WHERE id = NEW."gsCheifId";
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "increase_chief_crew_count"
AFTER INSERT ON "GroundServicesCrews"
FOR EACH ROW
EXECUTE PROCEDURE "increase_chief_crew_count"();
CREATE OR REPLACE FUNCTION "increase_pilot_crew_count"()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "Pilots" SET "crewCount" = "crewCount" + 1 WHERE id = NEW."pilotId";
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "increase_pilot_crew_count"
AFTER INSERT ON "CabinCrews"
FOR EACH ROW
EXECUTE PROCEDURE "increase_pilot_crew_count"();
--FUNCS
CREATE OR REPLACE FUNCTION "count_customer"()
RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM "Customers");
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION "get_total_payments"()
RETURNS int AS
$$
DECLARE
    total int;
BEGIN
    SELECT SUM(amount) INTO "total" FROM "Trips";
    RETURN total;
END;
$$
LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION "get_trip_count"()
RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM "Trips");
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE FUNCTION "get_most_referenced_customer_name"()
RETURNS text AS
$$
DECLARE
  most_referenced_customer_name text;
BEGIN
  SELECT c."name"
  INTO most_referenced_customer_name
  FROM "Customers" c
  INNER JOIN "Trips" t ON t."customerId" = c."id"
  GROUP BY c."id"
  ORDER BY COUNT(*) DESC
  LIMIT 1;
  RETURN most_referenced_customer_name;
END;
$$
LANGUAGE plpgsql;
```


## İnsert kodları

...
```sql

insert kodları

```


## Triggerler

* **nationality girdisini büyük harfe çevirme:**
```sql
CREATE OR REPLACE FUNCTION "capitalize_country"()
RETURNS TRIGGER AS $$
BEGIN
    NEW.nationality = UPPER(NEW.nationality);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "capitalize_country_pilots"
BEFORE INSERT ON "Pilots"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_customers"
BEFORE INSERT ON "Customers"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_cabinpersonels"
BEFORE INSERT ON "CabinPersonels"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_gsChiefs"
BEFORE INSERT ON "GroundServicesChiefs"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();
CREATE OR REPLACE TRIGGER "capitalize_country_gsPersonels"
BEFORE INSERT ON "GroundServicesPersonels"
FOR EACH ROW EXECUTE PROCEDURE "capitalize_country"();

```
* **GroundServicesCrew oluşturulunca crew Chiefinin crewCount unu arttırma:**
```sql
CREATE OR REPLACE FUNCTION "increase_chief_crew_count"()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "GroundServicesChiefs" SET "crewCount" = "crewCount" + 1 WHERE id = NEW."gsCheifId";
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "increase_chief_crew_count"
AFTER INSERT ON "GroundServicesCrews"
FOR EACH ROW
EXECUTE PROCEDURE "increase_chief_crew_count"();

```

* **CabinCrew oluşturulunca crew Pilotunun crewCount unu arttırma:**
```sql
CREATE OR REPLACE FUNCTION "increase_pilot_crew_count"()
RETURNS TRIGGER AS $$
BEGIN
    UPDATE "Pilots" SET "crewCount" = "crewCount" + 1 WHERE id = NEW."pilotId";
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
CREATE OR REPLACE TRIGGER "increase_pilot_crew_count"
AFTER INSERT ON "CabinCrews"
FOR EACH ROW
EXECUTE PROCEDURE "increase_pilot_crew_count"();

```

* **Uçuş yapan müşterinin rankını arttırma:**

```sql
CREATE OR REPLACE FUNCTION "increase_customer_rank"()
RETURNS TRIGGER 
AS
$$
BEGIN
	UPDATE "Customers"
	SET "customerRank" = "customerRank" + 1
	WHERE id = NEW."customerId";
	RETURN NULL;
END;
$$
LANGUAGE "plpgsql";
CREATE OR REPLACE TRIGGER "increase_customer_rank"
AFTER INSERT ON "Trips"
FOR EACH ROW
EXECUTE PROCEDURE "increase_customer_rank"();
```





## Fonksiyonlar



* **Müşteri sayısı:**
```sql
CREATE OR REPLACE FUNCTION "count_customer"()
RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM "Customers");
END;
$$ LANGUAGE plpgsql;

```
* **Yolculuklardan toplam kazanılan para:**
```sql
CREATE OR REPLACE FUNCTION "get_total_payments"()
RETURNS int AS
$$
DECLARE
    total int;
BEGIN
    SELECT SUM(amount) INTO "total" FROM "Trips";
    RETURN total;
END;
$$
LANGUAGE plpgsql;

```

* **Toplam yolculuk sayısı:**
```sql
CREATE OR REPLACE FUNCTION "get_trip_count"()
RETURNS integer AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM "Trips");
END;
$$ LANGUAGE plpgsql;

```

* **En çok yolculuk yapan müşterinin adı:**

```sql
CREATE OR REPLACE FUNCTION "get_most_referenced_customer_name"()
RETURNS text AS
$$
DECLARE
  most_referenced_customer_name text;
BEGIN
  SELECT c."name"
  INTO most_referenced_customer_name
  FROM "Customers" c
  INNER JOIN "Trips" t ON t."customerId" = c."id"
  GROUP BY c."id"
  ORDER BY COUNT(*) DESC
  LIMIT 1;
  RETURN most_referenced_customer_name;
END;
$$
LANGUAGE plpgsql;
```





## Authors

Proje github linki : https://github.com/kadirkuzu/AirlinesProject
- Mustafa Karadeniz G211210066 / 2-A
- Ejder Kadir Kuzu  G211210351 / 2-A

