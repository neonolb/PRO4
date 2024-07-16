![Banner](https://github.com/neonolb/PRO2/blob/PRO2/banner.png) 
## PROYECTO 4: Sistema de Reservas (CRUD)
Bootcamper : Nolberto Hernández A. -  Cohort 14





## Qué construirás en este proyecto
En este proyecto, te encontrarás con dos actividades:

1. Construirás una aplicación de servicios para la gestión de reservas en hoteles que involucre las 4 operaciones `CRUD` y otras 6 adicionales relacionadas con filtros, utilizando Node.js y Express. 

2. Opcionalmente, realizarás un proceso de investigación relacionado con la documentación de API, usando Swagger, con la estandarización OPENAPI, la cual se utiliza en equipos internacionales para construir servicios escalables.

A continuación, determinamos las características del proyecto:

- Utilizar Node.js y Express para el desarrollo del servidor.
- Contar con un archivo `.env` para las variables de entorno, el cual establecerás el puerto.
- Contar con un archivo `.gitignore` que incluya las carpetas y archivos que deberán ocultarse para el repositorio.
- Usar una arquitectura de carpetas clara como se muestra a continuación. Es de tu gusto agregar más archivos, rutas, controladores o, si lo prefieres, sintetizar. La idea es que la asignación de responsabilidades de tu código pueda ser ubicado fácilmente.

```
EJEMPLO_TU_PROYECTO
├─ .env
├─ .prettierrc
├─ README.md
├─ controllers
│  └─ TU_CONTROLADOR.js
├─ package-lock.json
├─ package.json
├─ routes
│  └─ TU_RUTA.js
└─ server.js  <- TU ARCHIVO DE ENTRADA
```

- Implementar los siguientes 10 endpoints. 

|Descripción del Endpoint|	Método|	Endpoint| Ejemplo. Caso de uso. |
|-----------------------|----------|------------|---------|
|Crear reserva	| POST| 	/api/reservas|Como viajero, quiero hacer una reserva en el hotel "Hotel Paraíso" para el 15 de mayo de 2023. Necesito una habitación doble para dos adultos y un niño.
|Obtener la lista de reservas|	GET|	/api/reservas|Como gerente del hotel, quiero ver una lista de todas las reservas para hoy para poder planificar el trabajo del personal de limpieza y recepción.|
|Obtener información de una reserva específica	|GET|	/api/reservas/:id|Como recepcionista, necesito verificar los detalles de la reserva del huésped que acaba de llegar al hotel. Su número de reserva es 12345.
|Actualizar información de una reserva|	PUT|	/api/reservas/:id|Como huésped, necesito cambiar mi reserva en el hotel "Hotel Paraíso". Originalmente reservé una habitación doble, pero ahora necesito una suite familiar. Mi número de reserva es 12345.|
|Eliminar una reserva específica	|DELETE|	/api/reservas/:id|Como viajero, tuve un cambio de planes y ya no necesito la habitación que reservé en el hotel "Hotel Paraíso". Mi número de reserva es 12345.|
|Filtrar reservas por hotel|	GET|	/api/reservas?hotel=HOTEL|Como gerente de una cadena de hoteles, quiero ver todas las reservas para el "Hotel Paraíso" para el próximo mes.|
|Filtrar reservas por rango de fechas|	GET|	/api/reservas?fecha_inicio=FECHA_INICIO&fecha_fin=FECHA_FIN|Como gerente del hotel, quiero ver todas las reservas para la semana de Navidad para poder planificar el personal y las actividades necesarias.|
|Filtrar reservas por tipo de habitación|	GET|	/api/reservas?tipo_habitacion=TIPO_HABITACION|Como gerente del hotel, quiero ver todas las reservas para nuestras suites de lujo para el próximo mes para asegurarme de que todo esté en perfectas condiciones para nuestros huéspedes VIP.|
|Filtrar reservas por estado|	GET|	/api/reservas?estado=ESTADO|Como gerente del hotel, quiero ver todas las reservas que están pendientes de pago para poder hacer un seguimiento con los clientes.|
|Filtrar reservas por número de huéspedes|	GET|	/api/reservas?num_huespedes=NUM_HUESPEDES|Como gerente del hotel, quiero ver todas las reservas para grupos de más de 5 personas para el próximo mes, para poder planificar las necesidades adicionales de estos grupos grandes.|



## LA SOLUCIÓN:
1. Se crea la estructura de carpetas solicitdas:
- `.env` Para definir el puerto y la URL
- `models :` Definimos el esquema a utilizar tanto para las reservas, como para los huepesdes.
- `Routes` Se definen las rutas para la API
- `Controller` Declaramos los valores para nuestro modelo
- `Package.json` se listan las dependencias de la aplicación.
- `Git` Controlador de versiones.

2. ### La solución:
```scss
// Definición del controlador bookingController

const {booking} = require("../models/booking");
const book5 = new booking(5, "Hotel Paraiso" ,5, "Chimuelo", "Martinez","suite","Reservado","25-07-2024", "27-07-2024", "2", "2", "4")
const book6 = new booking(6,"Hotel Paraiso" ,6,"Juan","Secada","Matrimonial","Reservado","25-07-2024", "27-07-2024", "2", "0", "2")
const book7 = new booking(7,"Hotel Paraiso" ,7,"Laura","Martin","Suite","Reservado","01-08-2024", "05-08-2024", "2", "0", "2")
const book8 = new booking(8,"Hotel Paraiso" ,8,"Macarena","Lopez","Suite","Tentativa","05-08-2024", "08-08-2024", "2", "0", "2")

  
// Se definen los métodos CRUD
// Elementos CRUD


    exports.findAll =(req, res)=> {
        res.send ([book1,book2,book3,book4,book4,book6,book7,book8]);
       };
    
     
    exports.findOne  =(req, res)=> {
        console.log(req.params.id_R);
        res.send(booking.id_R);
        };


    exports.create  =(req, res)=> {
        const b = {
          id_R: req.body.id_R,
          Hotel: req.body.Hotel,
          guest: req.body.guest,
          name: req.body.name,
          lastname: req.body.lastname,
          Tipo_hab:req.body.Tipo_hab,
          Status:req.body.Status,
          checkin: req.body.checkin,
          checkout: req.body.checkout,
          adult: req.body.adult,
          child: req.body.child,
          Total_Pax: req.body.Total_Pax

        
        }

    console.log('Reserva Guardado correctamente: ${b.Id_R}');
    res.send('Reserva Guardado correctamente: ${b.Id_R}');
    }
       
    exports.update = (req,res) => {
        console.log('Reserva Actualizado: ${req.params.Id_R}');
        res.send('Reserva Actualizado: ${req.params.Id_R}');
        }
    
        exports.delete = (req,res) => {
            console.log('Reserva Eliminado: ${req.params.Id_R}');
            res.send('Reserva Eliminado: ${req.params.Id_R}');
            }


  
    // Se define el modelo booking.js y se exporta
    class booking {
    constructor(Id_R, Hotel ,guest, name, lastname,Tipo_hab,Status, check_In, check_Out, Adultos, Child, Total_Pax, ) {
        this.Id_R = Id_R;
        this.Hotel = Hotel;
        this.guest = guest;
        this.name = name;
        this.lastname = lastname;
        this.Tipo_hab = Tipo_hab;
        this.Status = Status;
        this.check_In = check_In;
        this.check_Out = check_Out;
        this.Adultos = Adultos;
        this.Child = Child;
        this.Total_Pax = Total_Pax;
        
        }

}

module.exports ={ booking };

  
  // Se generan las Routes
  const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.get("/all",bookingController.findAll);
router.get("/:Id_R",bookingController.findOne);
router.post("/",bookingController.create);
router.patch("/:Id_R",bookingController.update);
router.delete("/:Id_R",bookingController.delete)
//router.get("/search",bookingController.filter);


module.exports = router;

  
    // Archivo .env
PORT=3000
URL_BASE=/api

#Declaro las rutas de la aplicación


```
- Como evidencia de la ejecución se agrega el pantallazo de insomia, que fue utilizado para probar los endpoints



## Entregables

Crea un repositorio en GitHub para este proyecto


- Archivo Readme.md
- https://github.com/neonolb/PRO4
- Pantallazo de la soluciónes.

![Banner](https://github.com/neonolb/PRO4/blob/main/images/booking_all.png) 

![Banner](https://github.com/neonolb/PRO4/blob/main/images/booking_update.png) 




