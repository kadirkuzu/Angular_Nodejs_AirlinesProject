export let createDatase = "CREATE DATABASE airliensdatabase"
export let createTables = 
`
CREATE EXTENSION pgcrypto;
CREATE TABLE IF NOT EXISTS "airports" (
        "id" SERIAL PRIMARY KEY,
        "name" text NOT NULL,
        "code" text NOT NULL,
        "city" text NOT NULL,
        "country" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "aircrafts" (
    "id" SERIAL PRIMARY KEY,
    "tailNumber" text NOT NULL,
    "seats" INT NOT NULL,
    "city" text NOT NULL,
    "country" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "persons" (
    "id" SERIAL PRIMARY KEY,
    "fullname" text NOT NULL,
    "email" text NOT NULL unique,
    "age" INT NOT NULL
);

CREATE TABLE IF NOT EXISTS "users" (
    "id" SERIAL PRIMARY KEY,
    "password" text NOT NULL
) INHERITS (persons);

CREATE TABLE IF NOT EXISTS "clients" (
    "id" SERIAL PRIMARY KEY,
    "dob" text NOT NULL
) INHERITS (persons);

CREATE TABLE IF NOT EXISTS "flights" (
    "id" SERIAL PRIMARY KEY,
    "trip" text NOT NULL,
    "userId" text NOT NULL,
    "clientId" text NOT NULL,
    "fromId" text NOT NULL,
    "toId" text NOT NULL
);

CREATE TABLE IF NOT EXISTS "trips" (
    "id" SERIAL PRIMARY KEY,
    "count" INT NOT NULL,
    "firstAirport" text NOT NULL,
    "lastAirport" text NOT NULL
);



`