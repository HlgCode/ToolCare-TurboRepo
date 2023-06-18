-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;

DROP TABLE IF EXISTS public."Categories";

CREATE TABLE IF NOT EXISTS public."Categories" (
    id integer NOT NULL DEFAULT nextval('"Categories_id_seq"' :: regclass),
    name character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Categories_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Issues";

CREATE TABLE IF NOT EXISTS public."Issues" (
    id integer NOT NULL DEFAULT nextval('"Issues_id_seq"' :: regclass),
    title character varying(255) COLLATE pg_catalog."default",
    date timestamp with time zone,
    "userId" integer NOT NULL,
    "toolId" integer NOT NULL,
    status character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Issues_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Locations";

CREATE TABLE IF NOT EXISTS public."Locations" (
    id integer NOT NULL DEFAULT nextval('"Locations_id_seq"' :: regclass),
    name character varying(255) COLLATE pg_catalog."default",
    adress character varying(255) COLLATE pg_catalog."default",
    contact character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Locations_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Maintenances";

CREATE TABLE IF NOT EXISTS public."Maintenances" (
    id integer NOT NULL DEFAULT nextval('"Maintenances_id_seq"' :: regclass),
    title character varying(255) COLLATE pg_catalog."default",
    "scheduleId" integer NOT NULL,
    "maintenanceDate" timestamp with time zone,
    "toolId" integer NOT NULL,
    "maintenanceType" character varying(255) COLLATE pg_catalog."default",
    frequency character varying(255) COLLATE pg_catalog."default",
    "requireCalibration" boolean,
    "supplierEmployeeId" integer,
    "purchaseOrderId" integer,
    status character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Maintenances_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Roles";

CREATE TABLE IF NOT EXISTS public."Roles" (
    id integer NOT NULL DEFAULT nextval('"Roles_id_seq"' :: regclass),
    name character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Roles_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Schedules";

CREATE TABLE IF NOT EXISTS public."Schedules" (
    id integer NOT NULL DEFAULT nextval('"Schedules_id_seq"' :: regclass),
    title character varying(255) COLLATE pg_catalog."default",
    "startDate" timestamp with time zone,
    "dueDate" timestamp with time zone,
    "locationId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Schedules_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Sessions";

CREATE TABLE IF NOT EXISTS public."Sessions" (
    id integer NOT NULL DEFAULT nextval('"Sessions_id_seq"' :: regclass),
    "userId" integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Sessions_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Tools";

CREATE TABLE IF NOT EXISTS public."Tools" (
    id integer NOT NULL DEFAULT nextval('"Tools_id_seq"' :: regclass),
    name character varying(255) COLLATE pg_catalog."default",
    "categoryId" integer,
    "locationId" integer,
    "maintenanceTimes" integer,
    "userId" integer,
    status character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "cotegoryId" integer,
    CONSTRAINT "Tools_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."Users";

CREATE TABLE IF NOT EXISTS public."Users" (
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"' :: regclass),
    "fullName" character varying(255) COLLATE pg_catalog."default",
    "birthDate" timestamp with time zone,
    email character varying(255) COLLATE pg_catalog."default",
    username character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    "roleId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."purchaseOrders";

CREATE TABLE IF NOT EXISTS public."purchaseOrders" (
    id integer NOT NULL DEFAULT nextval('"purchaseOrders_id_seq"' :: regclass),
    serial integer,
    "pdfDocument" character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "maintenanceId" integer,
    CONSTRAINT "purchaseOrders_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."supplierCompanies";

CREATE TABLE IF NOT EXISTS public."supplierCompanies" (
    id integer NOT NULL,
    name character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    description character varying(255) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    nit integer,
    CONSTRAINT "supplierCompanies_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."supplierEmployees";

CREATE TABLE IF NOT EXISTS public."supplierEmployees" (
    id integer NOT NULL,
    fullname character varying(255) COLLATE pg_catalog."default",
    phone character varying(255) COLLATE pg_catalog."default",
    "position" character varying(255) COLLATE pg_catalog."default",
    "companyId" integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "supplierEmployees_pkey" PRIMARY KEY (id)
);

DROP TABLE IF EXISTS public."userLocations";

CREATE TABLE IF NOT EXISTS public."userLocations" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "LocationId" integer NOT NULL,
    "UserId" integer NOT NULL,
    CONSTRAINT "userLocations_pkey" PRIMARY KEY ("LocationId", "UserId")
);

ALTER TABLE
    IF EXISTS public."Issues"
ADD
    CONSTRAINT "Issues_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES public."Tools" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Issues"
ADD
    CONSTRAINT "Issues_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Maintenances"
ADD
    CONSTRAINT "Maintenances_purchaseOrderId_fkey" FOREIGN KEY ("purchaseOrderId") REFERENCES public."purchaseOrders" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Maintenances"
ADD
    CONSTRAINT "Maintenances_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES public."Schedules" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Maintenances"
ADD
    CONSTRAINT "Maintenances_supplierEmployeeId_fkey" FOREIGN KEY ("supplierEmployeeId") REFERENCES public."supplierEmployees" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Maintenances"
ADD
    CONSTRAINT "Maintenances_toolId_fkey" FOREIGN KEY ("toolId") REFERENCES public."Tools" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Schedules"
ADD
    CONSTRAINT "Schedules_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES public."Locations" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Sessions"
ADD
    CONSTRAINT "Sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Tools"
ADD
    CONSTRAINT "Tools_cotegoryId_fkey" FOREIGN KEY ("cotegoryId") REFERENCES public."Categories" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE
SET
    NULL;

ALTER TABLE
    IF EXISTS public."Tools"
ADD
    CONSTRAINT "Tools_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES public."Locations" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Tools"
ADD
    CONSTRAINT "Tools_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."Users" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."Users"
ADD
    CONSTRAINT "Users_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public."Roles" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."purchaseOrders"
ADD
    CONSTRAINT "purchaseOrders_maintenanceId_fkey" FOREIGN KEY ("maintenanceId") REFERENCES public."Maintenances" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE
SET
    NULL;

ALTER TABLE
    IF EXISTS public."supplierEmployees"
ADD
    CONSTRAINT "supplierEmployees_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES public."supplierCompanies" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."userLocations"
ADD
    CONSTRAINT "userLocations_LocationId_fkey" FOREIGN KEY ("LocationId") REFERENCES public."Locations" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE
    IF EXISTS public."userLocations"
ADD
    CONSTRAINT "userLocations_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES public."Users" (id) MATCH SIMPLE ON UPDATE CASCADE ON DELETE CASCADE;

END;