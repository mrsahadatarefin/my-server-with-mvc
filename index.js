const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const dbConnect = require("./utils/dbConnect");
const toolsRoute = require('./routes/v1/tools.route');
const viewCount = require("./middleware/viewCount");
const errorHandler = require("./middleware/errorHandller");

app.use(cors());
app.use(express.json());

app.use(viewCount)
app.use('/api/v1/tools',toolsRoute)

dbConnect();


app.get("/", (req, res) => {
    res.send("express and mongodb server ");
  });

app.all('*',(req,res)=>{
    res.status(404).send('not found')
    

})

app.use(errorHandler)

  app.listen(port, () => {
    console.log(`express and mongodb server on ${port}`);
  });

  process.on("unhandledRejection",(error)=>{
    console.log(error.name,error.massage);
    app.close(()=>{
        process.exit(1)
    })

  })
