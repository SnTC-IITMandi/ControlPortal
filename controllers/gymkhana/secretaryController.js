const Secretary = require('./../../models/gymkhana/secretaryModel');

exports.getAll = async (req, res) => {
    try {
        const allSecretaries =await Secretary.find();
        const context = {
            status: 'success',
            data: 
                allSecretaries,
            
        };

        res.status(200).json(context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};
