const express = require("express");
const db = require("./db");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

app.get("/health", (req,res)=>{
 res.json({
  status:"ok",
  service:"skynet-ops-audit-service",
  time:new Date()
 });
});

app.post("/events", (req,res)=>{

 const {type, tenantId, severity, message, source} = req.body;

 if(!tenantId || !message){
  return res.status(400).json({error:"invalid payload"});
 }

 const id = uuidv4();
 const storedAt = new Date().toISOString();

 db.run(
  `INSERT INTO logs(message) VALUES(?)`,
  [message]
 );

 res.status(201).json({
  success:true,
  eventId:id,
  storedAt
 });

});

app.get("/events",(req,res)=>{

 db.all(`SELECT * FROM logs ORDER BY created_at DESC`,[],(err,rows)=>{

  if(err){
   return res.status(500).json({error:"database error"});
  }

  res.json({
   items:rows
  });

 });

});

app.listen(3000,()=>{
 console.log("Server running on port 3000");
});
