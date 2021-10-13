
const express = require("express");
const mongoose = require("mongoose");
//CONNET TO OTHER SERVER
const cors = require('cors');
const app = express();

//CONNECTION
mongoose.connect('mongodb+srv://deliofullstack:Deli0p0ge@cluster0.m5s0y.mongodb.net/CRM?retryWrites=true&w=majority', 
	{useNewUrlParser: true, useUnifiedTopology: true, ignoreUndefined: true}
);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`We're connected to the MongoDB Database`)
});

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//allow static file to access express
app.use('/public', express.static('public'));

//ROUTE USER
const userRoute = require('./routes/userRoute');
const employeeRoute = require('./routes/employeeRoute');
const companyRoute = require('./routes/companyRoute');

//USER ROUTE
app.use("/api/users", userRoute); 
app.use("/api/employees", employeeRoute);
app.use("/api/companies", companyRoute);

app.listen(process.env.PORT || 8000, ()=> console.log(`Server running at port ${process.env.PORT || 8000}`));
