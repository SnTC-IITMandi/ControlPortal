

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

exports.gymkhana=async(req,res)=>{
    try {
        context={
            title:"gymkhana",
        };
        res.render("gymkhana/index.ejs",context);
    } catch (error) {
        res.status(400).send({Error:err});
    }
}
