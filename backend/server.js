const express = require('express')
const app = express()
const mongoose  = require('mongoose')
const dotenv =require('dotenv')
const routeUrls = require('./routes/routes') //server need to aware their is a route.js 
const cors = require('cors')  //http calls on request

dotenv.config()

//mongoose.connect(process.env.DATABASE_ACCESS, ()=>console.log("DataBase Connected"))
app.use(express.json()) //body parser  helps to handle https post requests on incomming and outgoing requests 
app.use(cors())
app.use('/app',routeUrls)    //base url 
//app.listen(4000,()=> console.log("server is up and running "))

const PORT = process.env.PORT || 4000;

const CONNECTION_URL = 'mongodb+srv://user123:user123@mycluster.98tse.mongodb.net/users?retryWrites=true&w=majority';


mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: ${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);
