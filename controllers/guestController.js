//exports.findAll =(req, res)==> {

const {guest} = require("../models/guest");
const guest5 = new guest(5,"Chimuelo","Martinez","chimuelo@gmail.com","Brasil")
const guest6 = new guest(6,"Juan","Secada","juan@gmail.com","Peru")
const guest7 = new guest(7,"Laura","Martin","laura@gmail.com","Paraguay")
const guest8 = new guest(8,"Macarena","Lopez","macarena@gmail.com","Alemania")

    const guest1 ={
        id: 1,
        name: 'Nolberto',
        lastname: 'Gonzalez',
        email: 'nolberto@gmail.com',
        country: 'Chile',
    };
    const guest2 ={
        id: 2,
        name: 'Jacqueline',
        lastname: 'Fernandez',
        email: 'jacqueline@gmail.com',
        country: 'Argentina',
    };
    const guest3 ={
        id: 3,
        name: 'Fernanda',
        lastname: 'Muñoz',
        email: 'fernanda@gmail.com',
        country: 'Chile',
    };
    const guest4 ={
        id: 4,
        name: 'Diego',
        lastname: 'Perez',
        email: 'diego@gmail.com',
        country: 'Chile',
    };

    // Elementos CRUD

    exports.findAll =(req, res)=> {
        res.send ([guest1,guest2,guest3,guest4,guest5,guest6,guest7,guest8]);
        };
    
    exports.findOne  =(req, res)=> {
        console.log(req.params.id);
        res.send(guest1);
        };

    exports.create  =(req, res)=> {
        const g = {
            id: req.body.id,
            name: req.body.name,
            lastname: req.body.lastname,
            email: req.body.email,
            country: req.body.country,
        
        }
    console.log('Guest Guardado correctamente: ${g.name}');
    res.send('Guest Guardado correctamente: ${g.name}');
    }
       
    exports.update = (req,res) => {
        console.log('Guest Actualizado: ${req.params.id}');
        res.send('Guest Actualizado: ${req.params.id}');
        }
    
        exports.delete = (req,res) => {
            console.log('Guest Eliminado: ${req.params.id}');
            res.send('Guest Eliminado: ${req.params.id}');
            }

        
    
        
  