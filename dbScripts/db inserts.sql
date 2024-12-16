

-- Table: public.user

-- DROP TABLE IF EXISTS public."user";

CREATE TABLE IF NOT EXISTS public."user"
(
    id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
    "createdDate" timestamp with time zone NOT NULL DEFAULT now(),
    "updatedDate" timestamp with time zone NOT NULL DEFAULT now(),
    "accountType" character varying COLLATE pg_catalog."default" NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."user"
    OWNER to postgres;



-- Table: public.task

-- DROP TABLE IF EXISTS public.task;

CREATE TABLE IF NOT EXISTS public.task
(
    id integer NOT NULL DEFAULT nextval('task_id_seq'::regclass),
    title character varying(255) COLLATE pg_catalog."default" NOT NULL,
    description text COLLATE pg_catalog."default",
    "dueDate" timestamp without time zone,
    "userId" integer NOT NULL,
    "createdDate" timestamp without time zone NOT NULL DEFAULT now(),
    "updatedDate" timestamp without time zone NOT NULL DEFAULT now(),
    "deletedDate" timestamp without time zone,
    status task_status_enum NOT NULL DEFAULT 'Pending'::task_status_enum,
    CONSTRAINT task_pkey PRIMARY KEY (id),
    CONSTRAINT "FK_f316d3fe53497d4d8a2957db8b9" FOREIGN KEY ("userId")
        REFERENCES public."user" (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.task
    OWNER to postgres;



CREATE TABLE "role" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100) NOT NULL UNIQUE CHECK ("name" ~ '^[A-Z0-9_]+$')
);

CREATE TABLE user_role(
    "userId" INTEGER NOT NULL REFERENCES "user"(id),
    "roleId" INTEGER NOT NULL REFERENCES "role"(id),
    PRIMARY KEY ("userId", "roleId")
);

INSERT INTO "role" VALUES
(1,'SUPER_ADMIN');

INSERT INTO user_role VALUES
(1,1);


INSERT INTO task (title, description, status, "dueDate", "userId")
VALUES 
('Fix Bug #101', 'Resolve critical bug in production', 'In Progress', '2024-12-10 10:00:00', 1),
('Write Documentation', 'Update API documentation for v2.0', 'Pending', '2024-12-15 12:00:00', 2),
('Code Review', 'Review pull requests from team members', 'Completed', '2024-12-05 14:00:00', 1),
('Prepare Presentation', 'Prepare for quarterly product update', 'Pending', '2024-12-20 15:30:00', 3),
('Database Migration', 'Migrate the database to PostgreSQL', 'In Progress', '2024-12-12 09:00:00', 2),
('Deploy New Release', 'Deploy version 2.0 to production', 'Pending', '2024-12-11 17:00:00', 1),
('Update Dependencies', 'Update outdated packages in the project', 'Completed', '2024-12-03 08:00:00', 2),
('Schedule Meeting', 'Schedule team sync-up meeting for next week', 'Pending', '2024-12-16 10:00:00', 3),
('Customer Support', 'Follow up with important customer requests', 'In Progress', '2024-12-09 13:00:00', 1),
('Testing Automation', 'Create test scripts for CI/CD pipeline', 'Pending', '2024-12-22 16:00:00', 2);



INSERT INTO "user" (email, password, "accountType")
VALUES 
('john.doe@example.com', 'hashedpassword123', 'Admin'),
('jane.smith@example.com', 'hashedpassword456', 'User'),
('mike.jones@example.com', 'hashedpassword789', 'Manager');