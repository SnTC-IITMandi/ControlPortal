const News = require('./../models/newsModel');

exports.getAll = async (req, res, next) => {
    try {
        const allNews = await News.find();
        const context = {
            status: 'success',
            data: allNews,
        };

        res.status(200).send(context);
    } catch (err) {
        console.log(err);
        // res.status(400).json({ Error: err });
    }
};
