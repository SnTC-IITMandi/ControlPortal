const Societies = require('../../models/gymkhana/societiesModel');

exports.getAll = async (req, res) => {
    try {
        const allSocieties = await Societies.find();
        const context = {
            title: "bc Society",
            status: 'success',
            data: allSocieties,
        };
        res.render("gymkhana/society/society.ejs",context);
    } catch (err) {
        console.log(err);
        //res.status(400).json({ Error: err });
    }
};

exports.form=async(req,res,next)=>{
    try{
        const allSocieties = await Societies.find();
        const context = { 
            title: "society",
            status: "success",
            data: allSocieties,
        };
        res.render("gymkhana/society/societyadd.ejs",context);
    }
    catch(error){
        console.log(error)
    }
};

exports.addSociety =async(req,res,next)=>{
    try {
        const context = {
            title: "society",
            status: "success",
        };
        Societies.create({
            society_name:req.body.society_name,
            society_website:req.body.society_website,
            council_name:req.body.council_name,
            advisor_name:req.body.advisor_name,
            advisor_email:req.body.advisor_email,
            coadvisor_name:req.body.coadvisor_name,
            name:req.body.name
        })
        res.render("gymkhana/society/society.ejs",context);

    } catch (error) {
        console.log(error);
    }
}