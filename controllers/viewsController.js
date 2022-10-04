exports.home = async (req, res) => {
    try {
        context = {
            title: 'home',
        };
        res.render('index', context);
    } catch (err) {
        res.status(400).send({ Error: err });
    }
};
