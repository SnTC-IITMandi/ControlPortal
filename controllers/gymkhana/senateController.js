const Senate = require('./../../models/gymkhana/senateModel');

exports.getAll = async (req, res) => {
    try {
        const allSenates =await Senate.find();
        const context = {
            status: 'success',
            data: 
                allSenates,
            
        };

        res.status(200).json(context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};
