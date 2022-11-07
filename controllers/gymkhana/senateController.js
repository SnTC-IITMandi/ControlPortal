const Senate = require('./../../models/gymkhana/senateModel');

exports.getAll = async (req, res) => {
    try {
        const allSenates =await Senate.find();
        const context = {
            title: "senate",
            status: 'success',
            data: allSenates,
        };

        // res.status(200).json(context);
        res.render("gymkhana/senate/senate.ejs", context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};

exports.form=async(req,res,next)=>{
    try{
        const allSenates = await Senate.find();
        const context = {
            title: "Senate",
            status: "success",
            data: allSenates,
        };
        res.render("gymkhana/senate/senateadd.ejs",context);
    }
    catch(error){
        console.log(error)
    }
};

exports.addSenate =async(req,res,next)=>{
    try {
        const context = {
            title: "senate",
            status: "success",
        };
        Senate.create({
            name:req.body.name,
            rollno:req.body.rollno,
            branch:req.body.branch,
            phoneno:req.body.phoneno
        })
        res.render("gymkhana/senate/senate.ejs",context);

    } catch (error) {
        console.log(error);
    }
}