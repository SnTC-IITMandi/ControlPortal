const { updateOne } = require("./../../models/gymkhana/newsModel");
const News = require("./../../models/gymkhana/newsModel");

exports.getAll = async (req, res, next) => {
    try {
        const allNews = await News.find();
        const context = {
            title: "news",
            status: "success",
            data: allNews,
        };

        res.render("gymkhana/news/news.ejs", context);
    } catch (err) {
        console.log(err);
        // res.status(400).json({ Error: err });
    }
};
exports.form=async(req,res,next)=>{
    try{
        const allNews = await News.find();
        const context = {
            title: "news",
            status: "success",
            data: allNews,
        };
        res.render("gymkhana/news/newsadd.ejs",context);
    }
    catch(error){
        console.log(error)
    }
};

exports.addNews =async(req,res,next)=>{
    try {
        const context = {
            title: "news",
            status: "success",
        };
        News.create({
            title:req.body.title,
            date:req.body.date,
            description:req.body.description
        })
        res.render("gymkhana/news/news.ejs",context);

    } catch (error) {
        console.log(error);
    }
}

exports.updateNews=async(req,res,next)=>{
    try {
        const allNews = await News.findOne(
            {_id:req.params.id}
        );
        const context = {
            title: "news",
            status: "success",
            data: allNews,
        };
       res.render("gymkhana/news/newsupdate.ejs",context) 
    } catch (error) {
        console.log(error)
    }
}

exports.update=async(req,res,next)=>{
    try {
        const newdata={
            $set:{title:req.body.title,
            date:req.body.date,
            description:req.body.description}
        }
        const upda=await News.updateOne({_id:req.params.id},newdata)
        console.log("docupdated")
    const allNews = await News.find();
    const context = {
        title: "news",
        status: "success",
        data:allNews
    };
    res.render("gymkhana/news/news.ejs",context);
    }
    catch (error) {
        console.log(error);
    }
}