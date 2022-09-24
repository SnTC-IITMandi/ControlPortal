const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');

const newsRouter = require('./routes/newsRoutes');
const secretaryRouter = require('./routes/secretaryRoutes');
const senateRouter = require('./routes/senateRoutes');
const societiesRouter = require('./routes/societiesRoutes');
const hostelsRouter = require('./routes/hostelsRoutes');


const app = express();
app.use(express.json());


dotenv.config({ path: './config/config.env' });
connectDB();


// app.use('/api/news', newsRouter);
// app.use('/api/hostels', hostelsRouter);
// app.use('/api/secretary', secretaryRouter);
// app.use('/api/societies', societiesRouter);
// app.use('/api/senate', senateRouter);


app.all('*', (req, res, next) => {
    return res.status(404).json({
        message: "can't find this url",
    });
    // next(return);
});
port = process.env.PORT || 9000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log(`App listening on port : ${port}`);
});
