CREATE TABLE public.cursos (
	id serial4 NOT NULL,
	nombre varchar(50) NULL,
	nivel int4 NULL,
	fecha date NULL,
	duracion int4 NULL,
	CONSTRAINT cursos_pk PRIMARY KEY (id)
);
