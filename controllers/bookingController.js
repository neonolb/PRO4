//exports.findAll =(req, res)==> {

const {booking} = require("../models/booking");
const book5 = new booking(5, "Hotel Paraiso" ,5, "Chimuelo", "Martinez","suite","Reservado","25-07-2024", "27-07-2024", "2", "2", "4")
const book6 = new booking(6,"Hotel Paraiso" ,6,"Juan","Secada","Matrimonial","Reservado","25-07-2024", "27-07-2024", "2", "0", "2")
const book7 = new booking(7,"Hotel Paraiso" ,7,"Laura","Martin","Suite","Reservado","01-08-2024", "05-08-2024", "2", "0", "2")
const book8 = new booking(8,"Hotel Paraiso" ,8,"Macarena","Lopez","Suite","Tentativa","05-08-2024", "08-08-2024", "2", "0", "2")

    const book1 ={
        id_R: 1,
        Hotel: 'Hotel Paraiso',
        guest: '1',
        name: 'Nolberto',
        lastname: 'Gonzalez',
        Tipo_hab:'Matrimonial',
        Status:'Reservada',
        check_in: '25-07-2024',
        check_out: '27-07-2024',
        adult: '2',
        chil: '2',
        Total_Pax: '4'

    };

    const book2 ={
        id_R: 2,
        Hotel: 'Hotel Paraiso',
        guest: '1',
        name: 'Jacqueline',
        lastname: 'Fernandez',
        Tipo_hab:'Matrimonial',
        Status:'Reservada',
        check_in: '01-10-2024',
        check_out: '05-10-2024',
        adult: '2',
        child: '1',
        Total_Pax: '3'

    };



    const book3 ={
        id_R: 3,
        Hotel: 'Hotel Paraiso',
        guest: '3',
        name: 'Fernanda',
        lastname: 'Muñoz',
        Tipo_hab:'Suite',
        Status:'Reservada',
        check_in: '25-07-2024',
        check_out: '27-07-2024',
        adult: '2',
        child: '0',
        Total_Pax: '2'

    };

    const book4 ={
        id_R: 4,
        Hotel: 'Hotel Paraiso',
        guest: '4',
        name: 'Diego',
        lastname: 'Perez',
        Tipo_hab:'Suite',
        Status:'Reservada',
        check_in: '10-10-2024',
        check_out: '12-10-2024',
        adult: '2',
        child: '2',
        Total_Pax: '4'

    };


    // Elementos CRUD

    exports.findAll =(req, res)=> {
        res.send ([book1,book2,book3,book4,book4,book6,book7,book8]);
        };
    
    exports.findOne  =(req, res)=> {
        console.log(req.params.id_R);
        res.send(book1);
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

        
    
        
  