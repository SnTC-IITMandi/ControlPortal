const Hostels = require('./../../models/gymkhana/hostelsModel');

exports.getAll = async (req, res) => {
    try {
        const allHostels =await Hostels.find();
        const context = {
            status: 'success',
            data:
                allHostels,
            
        };

        res.status(200).json(context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};
