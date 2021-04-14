const { connect } = require('../database');
const Db = require('../database');
const connectDb = Db.connect



const citas = async (req, res) => {
    try {
    
        res.send({message:'Volvío a salir bien'})
        console.log(req.body);
        console.log('-------');
        
        
        
    }catch(e) {
        res.send({message:'Algo salió mal'})
    }
    
};

module.exports = {
    citas
}