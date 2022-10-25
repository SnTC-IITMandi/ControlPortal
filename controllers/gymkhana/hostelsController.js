const Hostels = require('./../../models/gymkhana/hostelsModel');

exports.getAll = async (req, res) => {
    try {
        const allHostels =await Hostels.find();
        const context = {
            title:"hostel",
            status: 'success',
            data:
                allHostels,
            
        };
        res.render("gymkhana/hostels/hostels.ejs", context);
    } catch (err) {
        res.status(400).json({ Error: err });
    }
};
exports.form=async(req,res,next)=>{
    try{
        const allHostels =await Hostels.find();
        const context = {
            title:"hostel",
            status: 'success',
            data:
                allHostels,
            
        };
        res.render("gymkhana/hostels/hostelsadd.ejs",context);
    }
    catch(error){
        console.log(error)
    }
};
exports.addhostels=async(req,res)=>{
    try {
        const context = {
            title:"hostel",
            status: 'success'
        };
        secname=req.body.secname;
        secpost=req.body.post;
        secemail=req.body.secemail;
        sec=[]
        for(let i=0;i<(secname.length);i++){
            sec.push({
                name:secname[i],
                post:secpost[i],
                email:secemail[i]
            })
        }
        const d= await Hostels.create({
            hostel_name:req.body.hostelname,
            secretaries: sec,
            warden :{ 
                name:req.body.wardenname,
                email:req.body.wardenemail,
            },
            assist_warden: { 
                name:req.body.awardenname,
                email:req.body.awardenemail,
             }
        });
        res.render("gymkhana/hostels/hostels.ejs", context);
    } catch (err) {
        console.log(err);
    }
}
