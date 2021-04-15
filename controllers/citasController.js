const Db = require('../database');
const connectDb = Db.connect



const citas = async (req, res) => {
    try {
        
        
        const bodyMessage = await req.body;
        console.log(bodyMessage);
        
        const query = `INSERT INTO reservaciones(nombre, apellido, hora, fecha, servicios) 
        VALUES ('${bodyMessage.name}','${bodyMessage.apellido}','${bodyMessage.hora}','${bodyMessage.fecha}','${bodyMessage.servicios}');`;
        
        connectDb.query(query, (err, result) => {
            if (err) throw err;
            console.log(result)
        });

        res.send({message:'Volvío  bien'});
    
        
        
    }catch(e) {
        res.send({message:'Algo salió mal'})
        console.log(e);
    }
    


};

module.exports = {
    citas
}