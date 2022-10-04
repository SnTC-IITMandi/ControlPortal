const Societies = require('./../../models/gymkhana/societiesModel');

exports.getAll = async (req, res) => {
    try {
        const allSocieties = await Societies.find();
        const context = {
            status: 'success',
            data: allSocieties,
        };
        res.status(200).json(context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};
