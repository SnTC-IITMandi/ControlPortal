const Secretary = require("./../../models/gymkhana/secretaryModel");

exports.getAll = async (req, res, next) => {
    try {
        const allSecretaries = await Secretary.find();
        const context = {
            title: "secretary",
            status: "success",
            data: allSecretaries,
        };

        res.render("gymkhana/secretary/secretary.ejs", context);
    } catch (error) {
        console.log(error);
    }
};

exports.form = async (req, res, next) => {
    try {
        const context = {
            title: "secretary",
            status: "success",
        };
        res.render("gymkhana/secretary/secretaryAdd.ejs", context);
    } catch (error) {
        console.log(error);
    }
};

exports.createSec = async (req, res, next) => {
    // image processing
    try {
        if (req.files) {
            const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];
            const file = req.files.img;
            if (!allowedExtensions.includes(file.mimetype)) {
                res.status(422).send({ message: "Invalid Image" });
                return;
            }
            req.body.img = {
                data: req.files.img.data,
                contentType: req.files.img.mimetype,
            };
        }
        const secretary = req.body;

        let exists = await Secretary.findOne({
            post: secretary.post,
            year: secretary.year,
        });
        if (exists !== null)
            res.status(400).send({
                message: "secretary already exists. Try updating",
            });
        else {
            let created = await Secretary.create(secretary);
            res.redirect('/gymkhana/secretary');
        }
    } catch (error) {
        console.log(error);
    }
};
