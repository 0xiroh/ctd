CREATE TABLE Socio (
Codigo INT PRIMARY KEY NOT NULL,
DNI INT NOT NULL,
Apellido VARCHAR(100),
Nombres VARCHAR(100),
Direccion VARCHAR(200),
Localidad VARCHAR(100)
);

CREATE TABLE Editorial (
Codigo INT PRIMARY KEY NOT NULL,
Razon_Social VARCHAR(100),
Telefono VARCHAR(100)
);

CREATE TABLE Autor (
Codigo INT PRIMARY KEY NOT NULL,
Apellido VARCHAR(100),
Nombre VARCHAR(100)
);

CREATE TABLE TelefonoxSocio (
Codigo INT PRIMARY KEY NOT NULL,
NroTelefono VARCHAR(100),
Codigo_Socio INT NOT NULL,
FOREIGN KEY (Codigo_Socio) REFERENCES Socio(Codigo)
);

CREATE TABLE Libro (
Codigo INT PRIMARY KEY NOT NULL,
ISBN VARCHAR(13),
Titulo VARCHAR(200),
Anio_Escritura DATE,
Codigo_Autor INT NOT NULL,
Anio_Edicion DATE,
Codigo_Editorial INT NOT NULL,
FOREIGN KEY (Codigo_Editorial) REFERENCES Editorial(Codigo),
FOREIGN KEY (Codigo_Autor) REFERENCES Autor(Codigo)
);

CREATE TABLE Volumen (
Codigo INT PRIMARY KEY NOT NULL,
Codigo_Libro INT NOT NULL,
Deteriorado BOOL,
FOREIGN KEY (Codigo_Libro) REFERENCES Libro(Codigo)
);

CREATE TABLE Prestamo(
Codigo INT PRIMARY KEY NOT NULL,
Codigo_Socio INT NOT NULL,
Fecha DATETIME,
Fecha_Devolucion DATE,
Fecha_Tope DATE,
FOREIGN KEY (Codigo_socio) REFERENCES Socio(Codigo)
);


CREATE TABLE PrestamoxVolumen (
Codigo INT PRIMARY KEY NOT NULL,
Codigo_Prestamo INT NOT NULL,
Codigo_Volumen INT NOT NULL,
FOREIGN KEY (Codigo_Prestamo) REFERENCES Prestamo(Codigo),
FOREIGN KEY (Codigo_Volumen) REFERENCES Volumen(Codigo)
);






