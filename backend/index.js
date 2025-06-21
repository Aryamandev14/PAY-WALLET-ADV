const express = require("express");
const app=express();

const cors = require('cors');
const corsOptions = {
  origin: 'https://pay-wallet-adv12.onrender.com',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
app.use(express.json());
const mainRouter=require("./routes/index");
app.use("/api/v1",mainRouter)
app.listen(3000);
