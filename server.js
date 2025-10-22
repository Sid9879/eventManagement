const  express =  require("express");
const app  =  express();
const mongoose = require('mongoose');
const config  =  require("./config");
const cors = require('cors');
const auth = require('./routes/auth');
const authapp = require('./routes/appAuth');
const admin = require('./routes/admin');
const userroutes = require('./routes/user');


app.use(express.json());
app.use(cors());

mongoose.connect(config.database.dbConnectionString)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth',auth);
app.use('/api/auth2',authapp);
app.use('/api/admin',admin);
app.use('/api/user',userroutes)




app.use((req,res)=>{
     res.status(404).json({"message":"route not found"})
})

app.listen(config.http.port , ()=>{
     console.log("Server started successfully at port " + config.http.port)
})